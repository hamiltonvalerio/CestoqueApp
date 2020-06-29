import { ItemProdutoDTO } from './itemproduto.dto';
import { RefDTO } from './ref.dto';
export interface ProdutoDTO{
    id: string;
    data_produto: Date;
    colaborador: RefDTO;
    producao: RefDTO;
    itens: ItemProdutoDTO[];
}