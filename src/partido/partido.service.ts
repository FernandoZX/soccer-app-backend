/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Posicion } from './interfaces/posicion.interface';

@Injectable()
export class PartidoService {
  constructor(private prisma: PrismaService) {}

  create(createPartidoDto: CreatePartidoDto) {
    return this.prisma.partido.create({
      data: {
        fecha: new Date(createPartidoDto.fecha),
        equipoLocal: {
          connect: { id: createPartidoDto.equipoLocalId },
        },
        equipoVisitante: {
          connect: { id: createPartidoDto.equipoVisitaId },
        },
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PartidoWhereUniqueInput;
    where?: Prisma.PartidoWhereInput;
    orderBy?: Prisma.PartidoOrderByWithRelationInput;
  }) {
    const { skip = 0, take = 10, where, orderBy } = params;
    const [partidos, total] = await Promise.all([
      this.prisma.partido.findMany({
        skip,
        take,
        where,
        orderBy,
        include: {
          equipoLocal: true, // Include related local team
          equipoVisitante: true, // Include related visiting team
        },
      }),
      this.prisma.partido.count({ where }),
    ]);
    return {
      data: partidos,
      meta: {
        total,
        page: skip ? Math.floor(skip / take) + 1 : 1,
        limit: take,
        totalPages: Math.ceil(total / take),
        filters: {
          where,
        },
        sorting: orderBy,
      },
    };
  }

  async findOne(id: number) {
    const partido = await this.prisma.partido.findUnique({
      where: { id },
      include: {
        equipoLocal: true, // Include related local team
        equipoVisitante: true, // Include related visiting team
      },
    });

    if (!partido) {
      throw new NotFoundException(`Partido with ID ${id} not found`);
    }

    return partido;
  }

  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    if (
      updatePartidoDto.equipoLocalId &&
      updatePartidoDto.equipoVisitaId &&
      updatePartidoDto.equipoLocalId === updatePartidoDto.equipoVisitaId
    ) {
      throw new BadRequestException('Los equipos no pueden ser iguales');
    }

    return this.prisma.partido.update({
      where: { id },
      data: {
        fecha: updatePartidoDto.fecha
          ? new Date(updatePartidoDto.fecha)
          : undefined,
        equipoLocalId: updatePartidoDto.equipoLocalId,
        equipoVisitaId: updatePartidoDto.equipoVisitaId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.partido.delete({ where: { id } });
  }

  async getTablaPosiciones(): Promise<Posicion[]> {
    const resultados = await this.prisma.resultado.findMany({
      include: {
        partido: {
          include: {
            equipoLocal: true,
            equipoVisitante: true,
          },
        },
      },
    });

    const tabla = new Map<number, Posicion>();

    for (const r of resultados) {
      const { partido, golesLocal, golesVisita } = r;
      const local = partido.equipoLocal;
      const visita = partido.equipoVisitante;

      // Inicializar si no existe
      if (!tabla.has(local.id)) {
        tabla.set(local.id, {
          equipoId: local.id,
          nombre: local.nombre,
          pj: 0,
          pg: 0,
          pe: 0,
          pp: 0,
          gf: 0,
          gc: 0,
          dif: 0,
          pts: 0,
        });
      }

      if (!tabla.has(visita.id)) {
        tabla.set(visita.id, {
          equipoId: visita.id,
          nombre: visita.nombre,
          pj: 0,
          pg: 0,
          pe: 0,
          pp: 0,
          gf: 0,
          gc: 0,
          dif: 0,
          pts: 0,
        });
      }

      const localStats = tabla.get(local.id)!;
      const visitaStats = tabla.get(visita.id)!;

      // PJ
      localStats.pj++;
      visitaStats.pj++;

      // Goles
      localStats.gf += golesLocal;
      localStats.gc += golesVisita;
      visitaStats.gf += golesVisita;
      visitaStats.gc += golesLocal;

      // Resultado
      if (golesLocal > golesVisita) {
        localStats.pg++;
        visitaStats.pp++;
        localStats.pts += 3;
      } else if (golesLocal < golesVisita) {
        visitaStats.pg++;
        localStats.pp++;
        visitaStats.pts += 3;
      } else {
        localStats.pe++;
        visitaStats.pe++;
        localStats.pts += 1;
        visitaStats.pts += 1;
      }

      // Diferencia
      localStats.dif = localStats.gf - localStats.gc;
      visitaStats.dif = visitaStats.gf - visitaStats.gc;
    }

    return Array.from(tabla.values()).sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      return b.dif - a.dif;
    });
  }
}
