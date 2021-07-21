import { UnidadeDTO } from './unidade.dto';
import { LocalizacaoDTO } from './localizacao.dto';
import { InsumoDTO } from "./insumo.dto";

export interface InsumolocalizacaoDTO extends DadosComunsInsumos{
    
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
    foiaprovado: string;
    nomedoinsumo: string;
    codigoalmoxarifado: string;
    loteLEI: string;
    subloteLEI: string;
    loteARM: string;
    irradiado: boolean;

    unidadeRecebida: UnidadeDTO;
    quantidadeVolume: number;
    unidadeEntrada: UnidadeDTO;

}