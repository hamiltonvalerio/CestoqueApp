import { LocalizacaoDTO } from './localizacao.dto';
import { InsumoDTO } from "./insumo.dto";

export interface InsumomovimentacaoDTO{
    
    insumo: InsumoDTO;
    quantidadeOrigem: number;
    quantidadeMovimentada: number;

}