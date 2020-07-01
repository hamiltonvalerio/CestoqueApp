import { API_CONFIG } from './../../config/api.config';
import { InsumoDTO } from './../../models/insumo.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
}