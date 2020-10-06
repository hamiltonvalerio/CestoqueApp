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

    insert(obj: FornecedorDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/fornecedores/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findTotosPaginado(page : number = 0, linesPerPage : number = 30){
        return this.http.get(`${API_CONFIG.baseUrl}/fornecedores/page/?page=${page}&linesPerPage=${linesPerPage}`);
    }

    findByNome(nome : string) {
        //console.log(nome);

            return this.http.get<FornecedorDTO[]>(`${API_CONFIG.baseUrl}/fornecedores/buscanome/?nome=${nome}`);

        
      }
      
}