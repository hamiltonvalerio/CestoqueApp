import { UnidadeDTO } from './unidade.dto';
import { InsumoDTO } from './insumo.dto';
import { LocalizacaoDTO } from './localizacao.dto';
export interface InsumoajusteDTO{
    
    localizacao: LocalizacaoDTO;
    insumo: InsumoDTO;
    quantidade: number;
    unidade: UnidadeDTO;
    loteFornecedor: string;
    loteCR: string;
    loteARM: string;
    dataFabricacao: Date;
    dataValidade: Date;
    dataAjuste: Date;
    loteLEI: string;
    subloteLEI: string;
    armario: string;
    prateleira: string;
    posicao: string;
    cas: string;
}