import { LocalUser } from './../models/local_user';
export class PerfilParaAcesso{

    retornaPermissaoPorPerfil(localUser:LocalUser, pagina:string):boolean{

        /*if(pagina == "AdministracaoPage"){
            return false
        }
        if(pagina == "ProfilePage"){
            return false
        }*/

        return false;
    }
}