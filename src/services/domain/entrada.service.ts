import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from './../../config/api.config';
import { EntradaDTO } from './../../models/entrada.dto';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class EntradaService{
    constructor(public http: HttpClient){

    }
    
    findAll() : Observable<EntradaDTO[]> {
        return this.http.get<EntradaDTO[]>(`${API_CONFIG.baseUrl}/entradas`);
    }

    insert(obj: EntradaDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/entradas/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }

    insertArquivos(obj: FormData, identrada: string){
        obj.append('identrada', identrada);
        return this.http.post(`${API_CONFIG.baseUrl}/entradas/inserarquivos/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    gerarEtiquetas(obj: EntradaDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/entradas/geraretiquetas/`,
        obj,
        {
            observe: 'response',
            responseType: 'text'
        });
    }
}