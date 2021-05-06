import { EntradaDTO } from './entrada.dto';
import { ArquivoDTO } from './arquivo.dto';
export interface EntradaArquivoDTO{
    id: string;
    arquivo: ArquivoDTO;
    entrada: EntradaDTO;
}