import { LocalizacaoDTO } from './localizacao.dto';
import { InsumomovimentacaoDTO } from './insumomovimentacao.dto';


export interface MovimentacaoDTO{

    id: string;
    datamovimentacao: Date;
    localizacaoOrigem: LocalizacaoDTO;
    localizacaoDestino: LocalizacaoDTO;
    itens: InsumomovimentacaoDTO[];
    show: Boolean;

}