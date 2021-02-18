import { InsumoEntradaDTO } from './insumoentrada.dto';
import { InsumoDTO } from './insumo.dto';

export class CInsumoEntradaDTO implements InsumoEntradaDTO{
    insumo: InsumoDTO;

    loteFornecedor: string;
    loteCR: string;
    dataIrradiacao: Date;
    dataVencIrradiacao: Date;
    dataValidade: Date;

    quantidade: number;
    valor: number;

    valorTotal: number;

    constructor(ie: InsumoEntradaDTO){
        this.insumo= ie.insumo;
        
        this.loteFornecedor= ie.loteFornecedor;
        this.loteCR= ie.loteCR;
        this.dataIrradiacao= ie.dataIrradiacao;
        this.dataVencIrradiacao= ie.dataVencIrradiacao;
        this.dataValidade = ie.dataValidade;
        this.quantidade= ie.quantidade;
        this.valor= ie.valor;

        this.valorTotal= ie.valorTotal;

    }

   
}