import { CInsumoEntradaDTO } from './cinsumoentrada.dto';
import { InsumoEntradaDTO } from "./insumoentrada.dto";

export interface EntradaDTO{
    //id: string;
    data_entrada: Date;
    numeronf: string;
    numLIA: string;
    numProcesso: string;
    numRequisicao: string;
    itens: CInsumoEntradaDTO[];
}