import { LocalizacaoDTO } from './localizacao.dto';
export interface LocalizacaoOrdenadaDTO{

    localizacao: LocalizacaoDTO;
    localizacoesfilhas: LocalizacaoDTO[];

}