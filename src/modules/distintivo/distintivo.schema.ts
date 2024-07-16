import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsEnum,
  ValidateIf,
  IsOptional,
  MaxLength,
  Max,
} from 'class-validator';

export type DistintivoDocument = Distintivo & Document;

export enum Ramo {
  LOBINHO = 'lobinho',
  ESCOTEIRO = 'escoteiro',
  SENIOR = 'senior',
  PIONEIRO = 'pioneiro',
}

@Schema({ timestamps: true })
export class Distintivo {
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

  @Prop({ enum: Ramo, type: String, default: null })
  @IsOptional()
  @ValidateIf((obj) => obj.ramo !== null)
  @IsEnum(Ramo, {
    message:
      'O ramo deve ser null ou um dos valores: lobinho, escoteiro, senior, pioneiro',
  })
  ramo: Ramo | null;

  // @Prop({ required: true })
  // img: Buffer;
  // aprender a como colocar imagem, nao entendi ao certo como faz
}

export const DistintivoSchema = SchemaFactory.createForClass(Distintivo);
