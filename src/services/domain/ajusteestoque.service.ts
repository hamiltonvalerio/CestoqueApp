import { InsumoajusteNewDTO } from './../../models/insumoajustenew.dto';
import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from './../../config/api.config';
import { InsumoajusteDTO } from './../../models/insumoajuste.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AjusteEstoqueService {

    constructor(public http: HttpClient){

    }

    insert(obj: InsumoajusteDTO){
        console.log(obj);
        return this.http.post(`${API_CONFIG.baseUrl}/ajusteestoque/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    insert2(obj: InsumoajusteNewDTO){
        console.log(obj);
        return this.http.post(`${API_CONFIG.baseUrl}/ajusteestoque/create`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findAjusteByDataAtual(dataatual : Date) : Observable<InsumoajusteDTO> {
        return this.http.get<InsumoajusteDTO>(`${API_CONFIG.baseUrl}/ajusteestoque/findbydataatual/?dataatual=${dataatual}`)
    }
    
}