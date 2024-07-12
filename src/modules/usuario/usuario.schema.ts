import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema({ timestamps: true })
export class Usuario {
  @Prop({ required: true })
  nomeUsuario: string;

  @Prop({ required: true })
  senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
