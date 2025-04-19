import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { PartidoEntity } from './entities/partido.entity';
import { TablaPosicionesDto } from './dto/tabla-posiciones.dto';

@Controller('partido')
@ApiTags('partidos')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Post()
  @ApiBody({ type: CreatePartidoDto })
  @ApiCreatedResponse({ type: PartidoEntity })
  create(@Body() createPartidoDto: CreatePartidoDto) {
    return this.partidoService.create(createPartidoDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: true, type: Number })
  @ApiQuery({ name: 'limit', required: true, type: Number })
  @ApiQuery({ name: 'equipoLocalId', required: false, type: Number })
  @ApiQuery({ name: 'equipoVisitanteId', required: false, type: Number })
  @ApiQuery({ name: 'fecha', required: false, type: String })
  @ApiQuery({ name: 'orderBy', required: false, enum: ['asc', 'desc'] })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiOkResponse({ type: PartidoEntity, isArray: true })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('equipoLocalId', new ParseIntPipe({ optional: true }))
    equipoLocalId?: number,
    @Query('equipoVisitanteId', new ParseIntPipe({ optional: true }))
    equipoVisitanteId?: number,
    @Query('fecha') fecha?: string,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'desc',
    @Query('sortBy') sortBy: string = 'createdAt',
  ) {
    const skip = page ? (page - 1) * (limit ?? 10) : 0;
    const take = limit ?? 10;
    return this.partidoService.findAll({
      skip,
      take,
      where: {
        ...(equipoLocalId && { equipoLocalId }),
        ...(equipoVisitanteId && { equipoVisitanteId }),
        ...(fecha && {
          fecha: {
            gte: new Date(fecha),
            lt: new Date(
              new Date(fecha).setDate(new Date(fecha).getDate() + 1),
            ),
          },
        }),
      },
      orderBy: {
        [sortBy]: orderBy, // Additional sorting by createdAt
      },
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: PartidoEntity })
  findOne(@Param('id') id: string) {
    return this.partidoService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdatePartidoDto })
  @ApiOkResponse({ type: PartidoEntity })
  update(@Param('id') id: string, @Body() updatePartidoDto: UpdatePartidoDto) {
    return this.partidoService.update(+id, updatePartidoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PartidoEntity })
  remove(@Param('id') id: string) {
    return this.partidoService.remove(+id);
  }

  @Get('tabla-posiciones')
  @ApiOkResponse({
    description: 'Tabla de posiciones actual',
    type: TablaPosicionesDto,
    isArray: true,
  })
  getTabla() {
    return this.partidoService.getTablaPosiciones();
  }
}
