import { Equipo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EquipoEntity implements Equipo {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
