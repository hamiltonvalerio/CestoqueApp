import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovimentacaoDTO } from '../../models/movimentacao.dto';

@Injectable()
export class MovimentacaoService {

    constructor(public http: HttpClient){

    }
    
    insert(obj: MovimentacaoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/movimentacoes/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

}
