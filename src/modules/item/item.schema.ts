import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsOptional, MaxLength, Max } from 'class-validator';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
export class Item {
  @Prop({ required: true, maxlength: 6 })
  @MaxLength(6, { message: 'O ID deve ter no máximo 6 caracteres' })
  id: string;

  @Prop({ required: true, min: 0, max: 100 })
  @Max(100, { message: 'A quantidade deve ser no máximo 100' })
  qtde: number;

  @Prop({ required: true, maxlength: 30 })
  @MaxLength(30, { message: 'O nome deve ter no máximo 30 caracteres' })
  nome: string;

  @Prop({ maxlength: 100 })
  @IsOptional()
  @MaxLength(100, { message: 'A descrição deve ter no máximo 100 caracteres' })
  descricao: string;

  // @Prop({ required: true })
  // img: Buffer;
  // aprender a como colocar imagem, nao entendi ao certo como faz
}

export const ItemSchema = SchemaFactory.createForClass(Item);
