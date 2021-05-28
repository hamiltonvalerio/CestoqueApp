import { InsumoDTO } from './insumo.dto';
import { ArquivoDTO } from './arquivo.dto';

export interface InsumoArquivoDTO{
    id: string;
    arquivo: ArquivoDTO;
    insumo : InsumoDTO;
    loteFornecedor : string;
    file : File;
}