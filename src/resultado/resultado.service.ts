/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, ResultadoFinal } from '@prisma/client';

@Injectable()
export class ResultadoService {
  constructor(private prisma: PrismaService) {}

  async create(createResultadoDto: CreateResultadoDto) {
    // First check if partido exists
    const partido = await this.prisma.partido.findUnique({
      where: { id: createResultadoDto.partidoId },
    });

    if (!partido) {
      throw new NotFoundException(
        `Partido with ID ${createResultadoDto.partidoId} not found`,
      );
    }
    let resultadoFinal: ResultadoFinal;

    if (createResultadoDto.golesLocal > createResultadoDto.golesVisita) {
      resultadoFinal = ResultadoFinal.LOCAL;
    } else if (createResultadoDto.golesLocal < createResultadoDto.golesVisita) {
      resultadoFinal = ResultadoFinal.VISITA;
    } else {
      resultadoFinal = ResultadoFinal.EMPATE;
    }
    return await this.prisma.resultado.create({
      data: {
        golesLocal: createResultadoDto.golesLocal,
        golesVisita: createResultadoDto.golesVisita,
        resultadoFinal: resultadoFinal,
        partido: {
          connect: { id: createResultadoDto.partidoId },
        },
      },
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ResultadoWhereUniqueInput;
    where?: Prisma.ResultadoWhereInput;
    orderBy?: Prisma.ResultadoOrderByWithRelationInput;
  }) {
    const { skip = 0, take = 10, where, orderBy } = params;
    const [resultados, total] = await Promise.all([
      this.prisma.resultado.findMany({
        skip,
        take,
        where,
        orderBy,
        include: {
          partido: true, // Include related partido
        },
      }),
      this.prisma.resultado.count({ where }),
    ]);
    return {
      data: resultados,
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
    const resultado = await this.prisma.resultado.findUnique({
      where: { id },
      include: {
        partido: true,
      },
    });

    if (!resultado) {
      throw new NotFoundException(`Resultado with ID ${id} not found`);
    }

    return resultado;
  }

  async update(id: number, updateResultadoDto: UpdateResultadoDto) {
    const partido = await this.prisma.partido.findUnique({
      where: { id: updateResultadoDto.partidoId },
    });

    if (!partido) {
      throw new NotFoundException(
        `Partido with ID ${updateResultadoDto.partidoId} not found`,
      );
    }

    let resultadoFinal: ResultadoFinal | undefined = undefined;

    if (
      updateResultadoDto.golesLocal !== undefined &&
      updateResultadoDto.golesVisita !== undefined
    ) {
      resultadoFinal =
        updateResultadoDto.golesLocal > updateResultadoDto.golesVisita
          ? ResultadoFinal.LOCAL
          : updateResultadoDto.golesLocal < updateResultadoDto.golesVisita
            ? ResultadoFinal.VISITA
            : ResultadoFinal.EMPATE;
    }

    return await this.prisma.resultado.update({
      where: { id },
      data: {
        partidoId: updateResultadoDto.partidoId,
        golesLocal: updateResultadoDto.golesLocal,
        golesVisita: updateResultadoDto.golesVisita,
        resultadoFinal: resultadoFinal,
      },
    });
  }

  remove(id: number) {
    return this.prisma.resultado.delete({ where: { id } });
  }
}
