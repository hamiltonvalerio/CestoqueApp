
import { EmailDTO } from '../../models/email.dto';
import { StorageService } from '../storage.service';
import { API_CONFIG } from '../../config/api.config';
import { PaginaDTO } from '../../models/Pagina.dto';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class PaginaService {

    constructor(public http: HttpClient, public storage: StorageService){
        
    }

    findByEmail(email: string) : Observable<PaginaDTO>{
        return this.http.get<PaginaDTO>(`${API_CONFIG.baseUrl}/paginas/email?value=${email}`);
    }

    insert(obj: PaginaDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/paginas/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    
    findByNomePagina(nomepagina: string) : Observable<PaginaDTO>{
        return this.http.get<PaginaDTO>(`${API_CONFIG.baseUrl}/paginas/buscapaginapornome?value=${nomepagina}`);
    }



}