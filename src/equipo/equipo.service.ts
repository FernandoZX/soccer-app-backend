/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { Prisma } from '@prisma/client';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquipoService {
  constructor(private prisma: PrismaService) {}

  create(createEquipoDto: CreateEquipoDto) {
    const data: Prisma.EquipoCreateInput = {
      nombre: createEquipoDto.nombre,
    };
    return this.prisma.equipo.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.EquipoWhereUniqueInput;
    where?: Prisma.EquipoWhereInput;
    orderBy?: Prisma.EquipoOrderByWithRelationInput;
  }) {
    const { skip = 0, take = 10, where, orderBy } = params;

    const [equipos, total] = await Promise.all([
      this.prisma.equipo.findMany({
        skip,
        take,
        where,
        orderBy,
      }),
      this.prisma.equipo.count({ where }),
    ]);

    return {
      data: equipos,
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

  findOne(id: number) {
    return this.prisma.equipo.findUnique({ where: { id } });
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return this.prisma.equipo.update({
      where: { id },
      data: updateEquipoDto,
    });
  }

  remove(id: number) {
    return this.prisma.equipo.delete({ where: { id } });
  }
}
