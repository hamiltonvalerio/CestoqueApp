export interface LocalizacaoDTO{
    id: string;
    nome: string;
    aprovacao: boolean;
    descarte: boolean;
    utilizado: boolean;
    almoxarifadoprincipal: boolean;
    irradiacao: boolean;
    atualizaqtdminima: boolean;
    objlocalizacaofilha: LocalizacaoDTO;
    localizacaofilha?: boolean;
    gerasublote: boolean;
}