import { ColaboradorAlterPassDTO } from './../../models/ColaboradorAlterPassDTO';
import { EmailDTO } from './../../models/email.dto';
import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { ColaboradorDTO } from './../../models/colaborador.dto';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ColaboradorService {

    constructor(public http: HttpClient, public storage: StorageService){
        
    }

    findAll() : Observable<ColaboradorDTO[]> {
        return this.http.get<ColaboradorDTO[]>(`${API_CONFIG.baseUrl}/colaboradores`)
    }

    findByEmail(email: string) : Observable<ColaboradorDTO>{
        return this.http.get<ColaboradorDTO>(`${API_CONFIG.baseUrl}/colaboradores/email?value=${email}`);
    }

    insert(obj: ColaboradorDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/colaboradores/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    recuperarSenha(obj: EmailDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/auth/forgot/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    alterarSenha(obj: ColaboradorAlterPassDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/auth/alterpass/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }
}