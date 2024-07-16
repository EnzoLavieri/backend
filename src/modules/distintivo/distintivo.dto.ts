import { Ramo } from './distintivo.schema';

export class CreateDistintivoDto {
  id: number;
  qtde: number;
  nome: string;
  descricao: string;
  ramo: Ramo;
}
