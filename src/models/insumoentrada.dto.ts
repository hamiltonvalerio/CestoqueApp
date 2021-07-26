import { EntradaDTO } from './entrada.dto';
import { UnidadeDTO } from './unidade.dto';
import { InsumoDTO } from './insumo.dto';
export interface InsumoEntradaDTO{
    insumo: InsumoDTO;
    entrada ?: EntradaDTO; 
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
    precisairradiacao: boolean;
    precisacontrolequalidade: boolean;
    cas: string;
}