import { API_CONFIG } from '../../config/api.config';
import { LocalizacaoDTO } from '../../models/localizacao.dto';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LocalizacaoService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes`)
    }

    findAllInsumoLocalizacao() : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/findAllInsumoLocalizacao`)
    }

    insert(obj: LocalizacaoDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/localizacoes/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findByLocalizacao(localizacao_id : string){
        //return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/buscaporlocalizacao/?localizacao_id=${localizacao_id}`);
    }

}