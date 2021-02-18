import { InsumomovimentacaoDTO } from './../../models/insumomovimentacao.dto';
import { InsumolocalizacaoDTO } from './../../models/insumolocalizacao.dto';
import { API_CONFIG } from './../../config/api.config';
import { InsumoDTO } from './../../models/insumo.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from 'rxjs/operators';

@Injectable()
export class InsumoService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<InsumoDTO[]> {
        return this.http.get<InsumoDTO[]>(`${API_CONFIG.baseUrl}/insumos`)
    }

    insert(obj: InsumoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/insumos/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findTodos(){
        return this.http.get<InsumoDTO[]>(`${API_CONFIG.baseUrl}/insumos`)
    }

    findTotosPaginado(page : number = 0, linesPerPage : number = 30){
        return this.http.get(`${API_CONFIG.baseUrl}/insumos/page/?page=${page}&linesPerPage=${linesPerPage}`);
    }

    findByLocalizacao(localizacao_id : string, page : number = 0, linesPerPage : number = 30){
        return this.http.get(`${API_CONFIG.baseUrl}/insumos/buscaporlocalizacao/?localizacao_id=${localizacao_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    
    /*findByLocalizacaoNoPage(localizacao_id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/insumos/buscaporlocalizacaonopage/?localizacao_id=${localizacao_id}`);
    }*/

    findInsumoLocalizacaoByLocalizacao(localizacao_id : string, page : number = 0, linesPerPage : number = 30){
        return this.http.get(`${API_CONFIG.baseUrl}/insumos/buscainsumolocalizacaoporlocalizacao/?localizacao_id=${localizacao_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    findByLocalizacaoNoPage(localizacao_id : string): Observable<InsumolocalizacaoDTO[]>{
        return this.http.get<InsumolocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/insumos/buscaporlocalizacaonopage/?localizacao_id=${localizacao_id}`);
    }

    findByMovimentacaoNoPage(movimentacao_id : string){
        return this.http.get<InsumomovimentacaoDTO[]>(`${API_CONFIG.baseUrl}/insumos/buscapormovimentacaonopage/?movimentacao_id=${movimentacao_id}`);
    }

    updateQuantidadeMinima(insumolocalizacao_id : string, quantidademinima : string, ){
        return this.http.post(`${API_CONFIG.baseUrl}/insumos/updateQuantidadeMinima/?insumolocalizacao_id=${insumolocalizacao_id}&quantidademinima=${quantidademinima}`,
        {
            observe: 'response',
            responseType: 'text'

        });
    }


}