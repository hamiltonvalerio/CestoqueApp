import { InsumoArquivoDTO } from './insumoarquivo.dto';
import { CategoriaDTO } from "./categoria.dto";
import { UnidadeDTO } from "./unidade.dto";

export interface InsumoDTO{

    id: string;
    nomenclatura: string;
    nome: string;
    valor: string;
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
    nomecodalmox: string;
    categorias: CategoriaDTO[];
    arquivos: InsumoArquivoDTO[];   
}