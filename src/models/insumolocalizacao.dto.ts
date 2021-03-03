import { LocalizacaoDTO } from './localizacao.dto';
import { InsumoDTO } from "./insumo.dto";

export interface InsumolocalizacaoDTO{
    
    id: string;
    insumo: InsumoDTO;
    localizacao: LocalizacaoDTO;
    quantidade: number;
    quantidademinima: number;
    loteFornecedor: string;
    loteCR: string;
    loteProducao: string;
    dataIrradiacao: Date;
    dataValidade: Date;
    dataAprovacao: Date;
    dataReproprovacao: Date;
    aprovado: boolean;
    loteRecebimento: string;

}