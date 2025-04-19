/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { IsEnum, IsInt } from 'class-validator';
import { ResultadoFinal } from '@prisma/client';

export class CreateResultadoDto {
  @IsInt()
  partidoId: number;

  @IsInt()
  golesLocal: number;

  @IsInt()
  golesVisita: number;

  @IsEnum(ResultadoFinal)
  resultadoFinal: ResultadoFinal;
}
