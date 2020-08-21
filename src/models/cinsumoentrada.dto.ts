import { InsumoEntradaDTO } from './insumoentrada.dto';
import { InsumoDTO } from './insumo.dto';

export class CInsumoEntradaDTO implements InsumoEntradaDTO{
    insumo: InsumoDTO;
    quantidade: number;
    valor: number;

    constructor(ie: InsumoEntradaDTO){
        this.insumo= ie.insumo;
        this.quantidade= ie.quantidade;
        this.valor= ie.valor;
    }

   
}