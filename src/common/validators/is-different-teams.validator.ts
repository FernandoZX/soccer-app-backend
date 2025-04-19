/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
interface CreatePartidoDto {
  equipoLocalId: number;
  equipoVisitanteId: number;
}

interface UpdatePartidoDto {
  equipoLocalId?: number;
  equipoVisitanteId?: number;
}

type PartidoDto = CreatePartidoDto | UpdatePartidoDto;

export function IsDifferentTeams(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isDifferentTeams',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: number, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const dto = args.object as PartidoDto;

          const relatedValue = dto[relatedPropertyName as keyof PartidoDto];

          if (value === undefined || relatedValue === undefined) {
            return true;
          }

          return (
            typeof value === 'number' &&
            typeof relatedValue === 'number' &&
            value !== relatedValue
          );
        },
        defaultMessage(args: ValidationArguments) {
          return 'Los equipos local y visitante deben ser distintos';
        },
      },
    });
  };
}
