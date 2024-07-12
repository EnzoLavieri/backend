import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  qtde: number;

  @Prop()
  descricao: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
