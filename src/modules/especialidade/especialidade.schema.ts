import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EspecialidadeDocument = Especialidade & Document;

@Schema()
export class Especialidade {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  nivel: string;

  @Prop({ required: true })
  ramoDeConhecimento: string;

  @Prop({ required: true })
  qtde: number;
}

export const EspecialidadeSchema = SchemaFactory.createForClass(Especialidade);
