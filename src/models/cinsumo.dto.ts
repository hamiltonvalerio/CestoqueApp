import { CategoriaDTO } from './categoria.dto';
import { InsumoDTO } from './insumo.dto';
import { UnidadeDTO } from './unidade.dto';
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
    unidade: UnidadeDTO;
    nomecodalmox: string;
    categorias: CategoriaDTO[];

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
        this.unidade = insumo.unidade;
        this.nomecodalmox = insumo.nomecodalmox;
        this.categorias = insumo.categorias;
    }


}