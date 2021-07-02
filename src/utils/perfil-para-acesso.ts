import { LocalUser } from './../models/local_user';
export class PerfilParaAcesso{

    retornaPermissaoPorPerfil(localUser:LocalUser, pagina:string):boolean{

        /*if(localUser.perfis.indexOf('ADMIN') > -1){
            return false;
        }else{
            return true;
        }*/
        return false;
    }
}