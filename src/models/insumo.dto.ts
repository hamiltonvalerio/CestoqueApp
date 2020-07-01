import { UnidadeDTO } from './unidade.dto';
export interface InsumoDTO{
    id: string;
    nomenclatura: string;
    nome: string;
    valor: number;
    codigo_almox: number;
    observacao: string;
    essencial: boolean;
    data_validade: Date;
    quantidade: number;
    taxa_de_consumo: number;
    codigo_barra: string;
    qrcode: string;
    rfid: string;
}