import { OrgaoDTO } from './../../models/orgao.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class OrgaoService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<OrgaoDTO[]> {
    return this.http.get<OrgaoDTO[]>(`${API_CONFIG.baseUrl}/orgaos`);
  }

  insert(obj: OrgaoDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/orgaos/`, obj, {
      observe: "response",
      responseType: "text",
    });
  }
  
}
