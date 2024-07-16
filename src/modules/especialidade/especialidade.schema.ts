import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength, Max } from 'class-validator';

export type EspecialidadeDocument = Especialidade & Document;

export enum RamoConhecimento {
  HabliESCOTEIRAS = 'habilidades escoteiras',
  DESPORTOS = 'desportos',
  CULTURA = 'cultura',
  SERVICOS = 'servicos',
  CIENCIATEC = 'ciencia tecnologia',
}

//ramos de conhecimento = img atras da especialidade

@Schema({ timestamps: true })
export class Especialidade {
  @Prop({ required: true, maxlength: 6 })
  @MaxLength(6, { message: 'O ID deve ter no máximo 6 caracteres' })
  id: string;

  @Prop({ required: true, min: 0, max: 100 })
  @Max(100, { message: 'A quantidade deve ser no máximo 100' })
  qtde: number;

  @Prop({ required: true, maxlength: 30 })
  @MaxLength(30, { message: 'O nome deve ter no máximo 30 caracteres' })
  nome: string;

  @Prop({ required: true, min: 1, max: 3 })
  nivel: number;

  @Prop({ enum: RamoConhecimento, type: String, required: true })
  ramo: RamoConhecimento;
  //precisa de @isenum??? verificar dps, mas ta funcinando

  // @Prop({ required: true })
  // img: Buffer;
  // aprender a como colocar imagem, nao entendi ao certo como faz
}

export const EspecialidadeSchema = SchemaFactory.createForClass(Especialidade);
