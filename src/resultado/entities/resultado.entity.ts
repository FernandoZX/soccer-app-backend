import { Partido, Resultado, ResultadoFinal } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { PartidoEntity } from 'src/partido/entities/partido.entity';

export class ResultadoEntity implements Resultado {
  @ApiProperty()
  id: number;
  @ApiProperty()
  partidoId: number;
  @ApiProperty()
  golesLocal: number;
  @ApiProperty()
  golesVisita: number;
  @ApiProperty({ enum: ResultadoFinal, enumName: 'ResultadoFinal' })
  resultadoFinal: ResultadoFinal;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty({ type: () => PartidoEntity })
  partiodo?: Partido;
}
