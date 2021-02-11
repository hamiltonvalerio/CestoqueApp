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

    findByLocalizacaoNoPage(localizacao_id : string): Observable<InsumoDTO[]>{
        return this.http.get<InsumoDTO[]>(`${API_CONFIG.baseUrl}/insumos/buscaporlocalizacaonopage/?localizacao_id=${localizacao_id}`);
    }

    updateQuantidadeMinima(insumo_id : string, localizacao_id : string, quantidademinima : string, ){
        return this.http.post(`${API_CONFIG.baseUrl}/insumos/updateQuantidadeMinima/?insumo_id=${insumo_id}&localizacao_id=${localizacao_id}&quantidademinima=${quantidademinima}`,
        {
            observe: 'response',
            responseType: 'text'

        });
    }


}