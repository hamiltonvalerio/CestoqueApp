import { FornecedorDTO } from './../../models/fornecedor.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FornecedorService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<FornecedorDTO[]> {
        return this.http.get<FornecedorDTO[]>(`${API_CONFIG.baseUrl}/fornecedores`)
    }
<<<<<<< HEAD
=======

    insert(obj: FornecedorDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/fornecedores/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }
>>>>>>> 95d8ab5... Git Reset
}