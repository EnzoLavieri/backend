import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DistintivoService } from './distintivo.service';
import { CreateDistintivoDto } from './distintivo.dto';

@Controller('distintivo')
export class DistintivoController {
  constructor(private readonly distintivoService: DistintivoService) {}

  @Post()
  async create(@Body() createDistintivoDto: CreateDistintivoDto) {
    return this.distintivoService.create(createDistintivoDto);
  }

  @Get()
  async findAll() {
    return this.distintivoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.distintivoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDistintivoDto: CreateDistintivoDto,
  ) {
    return this.distintivoService.update(id, updateDistintivoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.distintivoService.delete(id);
  }
}
