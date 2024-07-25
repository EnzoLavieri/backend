import { Ramo } from './distintivo.schema';

export class CreateDistintivoDto {
  id: string;
  qtde: number;
  nome: string;
  descricao: string;
  ramo: Ramo;
}
