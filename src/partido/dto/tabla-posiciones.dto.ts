import { ApiProperty } from '@nestjs/swagger';

export class TablaPosicionesDto {
  @ApiProperty()
  equipoId: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  pj: number;

  @ApiProperty()
  pg: number;

  @ApiProperty()
  pe: number;

  @ApiProperty()
  pp: number;

  @ApiProperty()
  gf: number;

  @ApiProperty()
  gc: number;

  @ApiProperty()
  dif: number;

  @ApiProperty()
  pts: number;
}
