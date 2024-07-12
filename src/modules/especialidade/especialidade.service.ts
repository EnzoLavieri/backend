import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Especialidade, EspecialidadeDocument } from './especialidade.schema';
import { CreateEspecialidadeDto } from './especialidade.dto';

@Injectable()
export class EspecialidadeService {
  constructor(
    @InjectModel(Especialidade.name)
    private especialidadeModel: Model<EspecialidadeDocument>,
  ) {}

  async create(
    createEspecialidadeDto: CreateEspecialidadeDto,
  ): Promise<Especialidade> {
    const createdEspecialidade = new this.especialidadeModel(
      createEspecialidadeDto,
    );
    return createdEspecialidade.save();
  }

  async findAll(): Promise<Especialidade[]> {
    return this.especialidadeModel.find().exec();
  }

  async findOne(id: string): Promise<Especialidade> {
    return this.especialidadeModel.findById(id).exec();
  }

  async update(
    id: string,
    updateEspecialidadeDto: CreateEspecialidadeDto,
  ): Promise<Especialidade> {
    return this.especialidadeModel
      .findByIdAndUpdate(id, updateEspecialidadeDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Especialidade> {
    return this.especialidadeModel.findByIdAndDelete(id).exec();
  }
}
