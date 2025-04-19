/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EquipoEntity } from './entities/equipo.entity';

@Controller('equipo')
@ApiTags('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Post()
  @ApiBody({ type: CreateEquipoDto })
  @ApiCreatedResponse({ type: EquipoEntity })
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equipoService.create(createEquipoDto);
  }

  @Get()
  @ApiOkResponse({ type: EquipoEntity, isArray: true })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('nombre') nombre?: string,
    @Query('orderBy') orderBy?: 'asc' | 'desc',
    @Query('sortBy') sortBy?: string,
  ) {
    return this.equipoService.findAll({
      skip: (page - 1) * limit,
      take: limit,
      where: nombre
        ? {
            nombre: {
              contains: nombre,
              mode: 'insensitive',
            },
          }
        : undefined,
      orderBy: sortBy
        ? {
            [sortBy]: orderBy || 'asc',
          }
        : undefined,
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: EquipoEntity })
  findOne(@Param('id') id: string) {
    return this.equipoService.findOne(+id);
  }
  @Patch(':id')
  @ApiBody({ type: UpdateEquipoDto })
  @ApiOkResponse({ type: EquipoEntity })
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equipoService.update(+id, updateEquipoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EquipoEntity })
  remove(@Param('id') id: string) {
    return this.equipoService.remove(+id);
  }
}
