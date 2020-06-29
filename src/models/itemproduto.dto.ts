import { RefDTO } from './ref.dto';
export interface ItemProdutoDTO{
    insumo: RefDTO;
    produto: RefDTO;
    quantidade: number;
    valor: number;
}