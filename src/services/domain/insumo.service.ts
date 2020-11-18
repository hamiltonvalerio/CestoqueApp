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


}