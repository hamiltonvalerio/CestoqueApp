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

    findByAprovacaoTrue() : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/findByAprovacaoTrue`)
    }

    findAllOrderByNome() : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes`)
    }

    findAllInsumoLocalizacao() : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/findAllInsumoLocalizacao`)
    }

    findById(localizacao_id : string) : Observable<LocalizacaoDTO> {
        return this.http.get<LocalizacaoDTO>(`${API_CONFIG.baseUrl}/localizacoes/?id=${localizacao_id}`)
    }

    findLocalizacaoById(localizacao_id : string) : Observable<LocalizacaoDTO> {
        return this.http.get<LocalizacaoDTO>(`${API_CONFIG.baseUrl}/localizacoes/findbyid/?localizacao_id=${localizacao_id}`)
    }

    findAllLocalizacoesFilhasByLocalizacaoPai(localizacao_id : string) : Observable<LocalizacaoDTO[]> {
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/findAllLocalizacoesFilhasByLocalizacaoPai/?localizacao_id=${localizacao_id}`)
    }

    insert(obj: LocalizacaoDTO){
        console.log(obj)
        return this.http.post(`${API_CONFIG.baseUrl}/localizacoes/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    update(obj: LocalizacaoDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/localizacoes/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    findByLocalizacao(localizacao_id : string){
        return this.http.get<LocalizacaoDTO[]>(`${API_CONFIG.baseUrl}/localizacoes/buscaporlocalizacao/?localizacao_id=${localizacao_id}`);
    }

    validaAlmoxarifadoPrincipal() : Observable<boolean> {
        return this.http.get<boolean>(`${API_CONFIG.baseUrl}/localizacoes/validaAlmoxarifadoPrincipal/`)
    }

    findAlmoxPrincipal() : Observable<LocalizacaoDTO> {
        return this.http.get<LocalizacaoDTO>(`${API_CONFIG.baseUrl}/localizacoes/findAlmoxPrincipal/`)
    }

}