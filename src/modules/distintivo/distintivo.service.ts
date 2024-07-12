import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Distintivo, DistintivoDocument } from './distintivo.schema';
import { CreateDistintivoDto } from './distintivo.dto';

@Injectable()
export class DistintivoService {
  constructor(
    @InjectModel(Distintivo.name)
    private distintivoModel: Model<DistintivoDocument>,
  ) {}

  async create(createDistintivoDto: CreateDistintivoDto): Promise<Distintivo> {
    const createdDistintivo = new this.distintivoModel(createDistintivoDto);
    return createdDistintivo.save();
  }

  async findAll(): Promise<Distintivo[]> {
    return this.distintivoModel.find().exec();
  }

  async findOne(id: string): Promise<Distintivo> {
    return this.distintivoModel.findById(id).exec();
  }

  async update(
    id: string,
    updateDistintivoDto: CreateDistintivoDto,
  ): Promise<Distintivo> {
    return this.distintivoModel
      .findByIdAndUpdate(id, updateDistintivoDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Distintivo> {
    return this.distintivoModel.findByIdAndDelete(id).exec();
  }
}
