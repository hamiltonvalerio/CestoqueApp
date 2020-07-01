import { CategoriaDTO } from './../../models/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`)
    }

    insert(obj: CategoriaDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/categorias/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }
}