import { PerfilNewDTO } from "./../../models/perfilnew.dto";
import { PerfilDTO } from "./../../models/perfil.dto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PerfilService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<PerfilDTO[]> {
    return this.http.get<PerfilDTO[]>(`${API_CONFIG.baseUrl}/perfis`);
  }

  insert(obj: PerfilNewDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/perfis/`, obj, {
      observe: "response",
      responseType: "text",
    });
  }

  findByNomePagina(nomepagina: string) : Observable<PerfilDTO[]>{
    return this.http.get<PerfilDTO[]>(`${API_CONFIG.baseUrl}/perfis/buscaperfispornomepagina?value=${nomepagina}`);
  }

  
  
}
