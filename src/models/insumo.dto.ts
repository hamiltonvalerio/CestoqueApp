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
    nomecodalmox: string;
}