import { InsumoDTO } from './insumo.dto';
export interface InsumoEntradaDTO{
    insumo: InsumoDTO;

    loteFornecedor: string;
    loteCR: string;
    dataIrradiacao: Date;
    dataVencIrradiacao: Date;

    quantidade: number;
    valor: number;

    valorTotal: number;
}