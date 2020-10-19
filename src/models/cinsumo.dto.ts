import { InsumoDTO } from './insumo.dto';
export class CInsumoDTO implements InsumoDTO{
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

      constructor(insumo: InsumoDTO){
        this.id= insumo.id;
        this.nomenclatura= insumo.nomenclatura;
        this.nome= insumo.nome;
        this.valor= insumo.valor;
        this.codigoalmox= insumo.codigoalmox;
        this.observacao= insumo.observacao;
        this.essencial= insumo.essencial;
        this.datavalidade= insumo.datavalidade;
        this.quantidade= insumo.quantidade;
        this.taxadeconsumo= insumo.taxadeconsumo;
        this.codigobarra= insumo.codigobarra;
        this.qrcode= insumo.qrcode;
        this.rfid= insumo.rfid;
        this.nomecodalmox = insumo.nomecodalmox;
    }


}