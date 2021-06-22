import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovimentacaoDTO } from '../../models/movimentacao.dto';

@Injectable()
export class MovimentacaoService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<MovimentacaoDTO[]> {
        return this.http.get<MovimentacaoDTO[]>(`${API_CONFIG.baseUrl}/movimentacoes`);
    }
    
    insert(obj: MovimentacaoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/movimentacoes/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findTotosPaginado(page : number = 0, linesPerPage : number = 30){
        return this.http.get(`${API_CONFIG.baseUrl}/movimentacoes/page/?page=${page}&linesPerPage=${linesPerPage}`);
    }

    findString(){
        return this.http.get(`${API_CONFIG.baseUrl}/movimentacoes/string`);
    }

    findTodos() : Observable<MovimentacaoDTO[]> {
        return this.http.get<MovimentacaoDTO[]>(`${API_CONFIG.baseUrl}/movimentacoes/findTodos`);
    }

    movimentacoesPorLoteLEI(loteLEI : string): Observable<InsumomovimentacaoDTO[]>{
        return this.http.get<InsumomovimentacaoDTO[]>(`${API_CONFIG.baseUrl}/movimentacoes/movimentacoesPorLoteLEI/?loteLEI=${loteLEI}`);
    }

}
