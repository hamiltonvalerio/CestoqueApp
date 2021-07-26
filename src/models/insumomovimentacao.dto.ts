import { UnidadeDTO } from './unidade.dto';
import { LocalizacaoDTO } from './localizacao.dto';
import { InsumoDTO } from "./insumo.dto";

export interface InsumomovimentacaoDTO extends DadosComunsInsumos{
    
    insumo: InsumoDTO;
    quantidadeOrigem: number;
    quantidadeMovimentada: number;
    loteFornecedor: string;
    loteCR: string;
    loteProducao: string;
    dataIrradiacao: Date;
    dataValidade: Date;
    dataAprovacao: Date;
    dataReproprovacao: Date;
    aprovado: boolean;
    fieldsGarantiaQualidade: boolean;
    loteRecebimento: string;
    loteLEI: string;
    loteARM: string;
    irradiado: boolean;
    subloteLEI: string;
    
    unidadeRecebida?: UnidadeDTO;
    quantidadeVolume?: number;
    unidadeEntrada?: UnidadeDTO;

    show: Boolean;

    utilizado?: boolean;
    descartado?: boolean;
    isDisableddescartado?: boolean;
    isDisabledutilizado?: boolean;
    localizacao?: LocalizacaoDTO;
    localizacaoOrigem?: LocalizacaoDTO;

    quantidadeRealMovimentada?: number;

    armario: string;
    posicao: string;
    cas: string;


}