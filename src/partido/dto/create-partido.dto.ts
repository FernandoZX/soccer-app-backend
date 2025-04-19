import { IsInt, IsDateString } from 'class-validator';
import { IsDifferentTeams } from 'src/common/validators/is-different-teams.validator';
export class CreatePartidoDto {
  @IsInt()
  equipoLocalId: number;

  @IsInt()
  @IsDifferentTeams('equipoLocalId', {
    message: 'No puede jugar contra sí mismo',
  })
  equipoVisitaId: number;

  @IsDateString()
  fecha: string;
}
