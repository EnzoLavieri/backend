import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DistintivoDocument = Distintivo & Document;

@Schema()
export class Distintivo {
  @Prop({ required: true })
  nome: string;

  @Prop()
  descricao: string;

  @Prop({ required: true })
  ramo: string;

  @Prop({ required: true })
  qtde: number;
}

export const DistintivoSchema = SchemaFactory.createForClass(Distintivo);
