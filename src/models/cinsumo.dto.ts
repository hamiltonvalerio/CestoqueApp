import { InsumoDTO } from './insumo.dto';
export class CInsumoDTO implements InsumoDTO{
    id: string;
    nomenclatura: string;
    nome: string;
    valor: string;
    codigo_almox: number;
    observacao: string;
    essencial: boolean;
    data_validade: Date;
    quantidade: number;
    taxa_de_consumo: number;
    codigo_barra: string;
    qrcode: string;
    rfid: string;
    nome_codalmox: string;

      constructor(insumo: InsumoDTO){
        this.id= insumo.id;
        this.nomenclatura= insumo.nomenclatura;
        this.nome= insumo.nome;
        this.valor= insumo.valor;
        this.codigo_almox= insumo.codigo_almox;
        this.observacao= insumo.observacao;
        this.essencial= insumo.essencial;
        this.data_validade= insumo.data_validade;
        this.quantidade= insumo.quantidade;
        this.taxa_de_consumo= insumo.taxa_de_consumo;
        this.codigo_barra= insumo.codigo_barra;
        this.qrcode= insumo.qrcode;
        this.rfid= insumo.rfid;
        this.nome_codalmox = insumo.nome_codalmox;
    }


}