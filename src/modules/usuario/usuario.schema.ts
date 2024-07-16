import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength, Max } from 'class-validator';

export type UsuarioDocument = Usuario & Document;

export enum Classe {
  CHEFE = 'chefe',
  JOVEM = 'jovem',
  ADMIN = 'admin',
}

@Schema({ timestamps: true })
export class Usuario {
  @Prop({ required: true, maxlength: 6 })
  @MaxLength(6, { message: 'O ID deve ter no máximo 6 caracteres' })
  id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, maxlength: 20 })
  @MaxLength(20, { message: 'O ID deve ter no máximo 20 caracteres' })
  nomeUsuario: string;

  @Prop({ required: true, maxlength: 20 })
  @MaxLength(20, { message: 'O ID deve ter no máximo 20 caracteres' })
  senha: string;

  @Prop({ enum: Classe, type: String, required: true })
  classe: Classe;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
