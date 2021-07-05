import { PerfilDTO } from "./perfil.dto";

export interface ColaboradorDTO {
    id : string;
    nome : string;
    email : string; 
    perfis : PerfilDTO[];
    show: Boolean;
}