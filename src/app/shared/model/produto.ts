import { Fabricante } from './fabricante';

export class Produto {
  id: number;
  nome: String;
  fabricanteDoProduto: Fabricante;
  peso: number;
  valor?: number;
  dataCadastro: Date;

}
