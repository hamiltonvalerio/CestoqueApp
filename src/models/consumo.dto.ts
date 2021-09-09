import { UnidadeDTO } from './unidade.dto';
import { TipoConsumoEnum } from './../enums/tipoconsumo.enum';
import { InsumoDTO } from './insumo.dto';

export interface ConsumoDTO {

    id : string;
    insumo : InsumoDTO;
    tipoconsumo : TipoConsumoEnum;
    unidadetipo : UnidadeDTO;
    quantidadecon : number;
    unidadecon : UnidadeDTO;
    
}
