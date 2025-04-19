import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { ResultadoEntity } from './entities/resultado.entity';

@Controller('resultado')
export class ResultadoController {
  constructor(private readonly resultadoService: ResultadoService) {}

  @Post()
  @ApiBody({ type: CreateResultadoDto })
  @ApiCreatedResponse({ type: ResultadoEntity })
  create(@Body() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: true, type: Number })
  @ApiQuery({ name: 'limit', required: true, type: Number })
  @ApiQuery({ name: 'partidoId', required: false, type: Number })
  @ApiQuery({ name: 'fecha', required: false, type: String })
  @ApiQuery({ name: 'orderBy', required: false, enum: ['asc', 'desc'] })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiOkResponse({ type: ResultadoEntity, isArray: true })
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query('partidoId', new ParseIntPipe({ optional: true }))
    partidoId?: number,
    @Query('fecha') fecha?: string,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'desc',
    @Query('sortBy') sortBy: string = 'createdAt',
  ) {
    const skip = page ? (page - 1) * (limit ?? 10) : 0;
    const take = limit ?? 10;
    return this.resultadoService.findAll({
      skip,
      take,
      where: {
        ...(partidoId && { partidoId }),
      },
      orderBy: {
        [sortBy]: orderBy, // Additional sorting by createdAt
      },
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: ResultadoEntity })
  findOne(@Param('id') id: string) {
    return this.resultadoService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateResultadoDto })
  @ApiOkResponse({ type: ResultadoEntity })
  update(
    @Param('id') id: string,
    @Body() updateResultadoDto: UpdateResultadoDto,
  ) {
    return this.resultadoService.update(+id, updateResultadoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResultadoEntity })
  remove(@Param('id') id: string) {
    return this.resultadoService.remove(+id);
  }
}
