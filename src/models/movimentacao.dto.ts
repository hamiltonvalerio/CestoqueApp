import { LocalizacaoDTO } from './localizacao.dto';
import { InsumomovimentacaoDTO } from './insumomovimentacao.dto';


export interface MovimentacaoDTO{

    datamovimentacao: Date;
    localizacaoOrigem: LocalizacaoDTO;
    localizacaoDestino: LocalizacaoDTO;
    itens: InsumomovimentacaoDTO[];

}