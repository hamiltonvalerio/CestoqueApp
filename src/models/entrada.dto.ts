import { InsumoEntradaDTO } from "./insumoentrada.dto";

export interface EntradaDTO{
    //id: string;
    data_entrada: Date;
    numeronf: string;
    numLIA: string;
    numProcesso: string;
    numRequisicao: string;
    itens: InsumoEntradaDTO[];
}