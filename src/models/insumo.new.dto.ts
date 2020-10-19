import { UnidadeDTO } from './unidade.dto';
import { RefDTO } from './ref.dto';
import { InsumoDTO } from "./insumo.dto";
import { LocalizacaoDTO } from './localizacao.dto';

export interface InsumoNewDTO{


    nomenclatura: string;
    nome: string;
    valor: number;
    codigoalmox: number;
    observacao: string;
    essencial: boolean;
    datavalidade: Date;
    quantidade: number;
    taxadeconsumo: number;
    codigobarra: string;
    qrcode: string;
    rfid: string;
    unidade: UnidadeDTO;
    localizacoes: LocalizacaoDTO[];
    
}