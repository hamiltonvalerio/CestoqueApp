import { API_CONFIG } from './../../config/api.config';
import { UnidadeDTO } from './../../models/unidade.dto';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UnidadeService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<UnidadeDTO[]> {
        return this.http.get<UnidadeDTO[]>(`${API_CONFIG.baseUrl}/unidades`)
    }

    insert(obj: UnidadeDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/unidades/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

}