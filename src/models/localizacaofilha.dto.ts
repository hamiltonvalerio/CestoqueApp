import { LocalizacaoDTO } from "./localizacao.dto";

export interface LocalizacaoFilhaDTO{
    id: string;
    nome: string;
    aprovacao: boolean;
    descarte: boolean;
    utilizado: boolean;
    almoxarifadoprincipal: boolean;
    irradiacao: boolean;
    atualizaqtdminima: boolean;
    localizacao: LocalizacaoDTO;
    localizacaopai?: LocalizacaoDTO;
}