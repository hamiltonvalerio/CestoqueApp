import { UnidadeDTO } from './unidade.dto';
import { InsumoEntradaDTO } from './insumoentrada.dto';
import { InsumoDTO } from './insumo.dto';

export class CInsumoEntradaDTO implements InsumoEntradaDTO{
    insumo: InsumoDTO;

    loteFornecedor: string;
    loteCR: string;
    loteARM: string;
    dataIrradiacao: Date;
    dataVencIrradiacao: Date;
    dataValidade: Date;
    dataFabricacao: Date;

    quantidade: number;
    valor: number;

    valorTotal: number;

    quantidadeetiquetas: number;

    unidadeRecebida: UnidadeDTO;
    quantidadeVolume: number;
    unidadeEntrada: UnidadeDTO;
    loteLEI: string;
    constructor(ie: InsumoEntradaDTO){
        this.insumo= ie.insumo;
        
        this.loteFornecedor= ie.loteFornecedor;
        this.loteCR= ie.loteCR;
        this.loteARM = ie.loteARM;
        this.dataIrradiacao= ie.dataIrradiacao;
        this.dataVencIrradiacao= ie.dataVencIrradiacao;
        this.dataValidade = ie.dataValidade;
        this.dataFabricacao = ie.dataFabricacao;
        this.quantidade= ie.quantidade;
        this.valor= ie.valor;

        this.valorTotal= ie.valorTotal;

        this.quantidadeetiquetas = ie.quantidadeetiquetas;

        this.unidadeRecebida = ie.unidadeRecebida;
        this.quantidadeVolume = ie.quantidadeVolume;
        this.unidadeEntrada = ie.unidadeEntrada;
        this.loteLEI = ie.loteLEI;
    }

   
}