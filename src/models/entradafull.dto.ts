import { LocalizacaoDTO } from './localizacao.dto';
import { CInsumoEntradaDTO } from './cinsumoentrada.dto';
import { InsumoEntradaDTO } from "./insumoentrada.dto";

export interface EntradaFullDTO{
    id: string;
    dataEntrada: Date;
    numeronf: string;
    numLIA: string;
    numProcesso: string;
    numRequisicao: string;
    itens: CInsumoEntradaDTO[];
    show: Boolean;
    localizacao: LocalizacaoDTO;
    loteRecebimento: string;
}