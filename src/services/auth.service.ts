import { ColaboradorDTO } from './../models/colaborador.dto';
import { ColaboradorService } from './domain/colaborador.service';
import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../config/api.config';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();
    colaborador: ColaboradorDTO;

    constructor(public http: HttpClient, 
        public storage : StorageService,
        public colaboradorService: ColaboradorService){

    }

    authenticate(creds : CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, 
        creds, 
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    successfullLogin(authorizationValue : string, perfis: string[]){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub,
            perfis: perfis
        };
        this.storage.setLocalUser(user);
    }

    refreshToken(){
        return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh_token`, 
        {}, 
        {
            observe: 'response',
            responseType: 'text'
        });
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}