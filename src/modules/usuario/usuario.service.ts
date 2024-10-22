import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './usuario.schema';
import { CreateUsuarioDto } from './usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, salt);

    const createdUsuario = new this.usuarioModel({
      ...createUsuarioDto,
      senha: hashedPassword,
    });

    return createdUsuario.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioModel.findOne({ email }).exec();
  }

  async update(
    id: string,
    updateUsuarioDto: CreateUsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioModel
      .findByIdAndUpdate(id, updateUsuarioDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Usuario> {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}
