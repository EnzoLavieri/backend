import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './especialidade.dto';

@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post()
  async create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadeService.create(createEspecialidadeDto);
  }

  @Get()
  async findAll() {
    return this.especialidadeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.especialidadeService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEspecialidadeDto: CreateEspecialidadeDto,
  ) {
    return this.especialidadeService.update(id, updateEspecialidadeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.especialidadeService.delete(id);
  }
}
