import { LocalizacaoFilhaDTO } from './localizacaofilha.dto';
export interface LocalizacaoDTO{
    id: string;
    nome: string;
    aprovacao: boolean;
    descarte: boolean;
    utilizado: boolean;
    almoxarifadoprincipal: boolean;
    irradiacao: boolean;
    atualizaqtdminima: boolean;
    localizacoesfilhas: LocalizacaoFilhaDTO[];
    localizacaofilha?: boolean;
}