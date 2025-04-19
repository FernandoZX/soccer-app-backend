import { Equipo, Partido } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { EquipoEntity } from '../../equipo/entities/equipo.entity';

export class PartidoEntity implements Partido {
  @ApiProperty()
  id: number;
  @ApiProperty()
  equipoLocalId: number;
  @ApiProperty()
  equipoVisitaId: number;
  @ApiProperty()
  fecha: Date;
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: () => EquipoEntity })
  equipoLocal?: Equipo;

  @ApiProperty({ type: () => EquipoEntity })
  equipoVisitante?: Equipo;
}
