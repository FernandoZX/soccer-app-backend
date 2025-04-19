import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  nombre: string;
}
