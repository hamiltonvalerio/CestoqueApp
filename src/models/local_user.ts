import { PerfilDTO } from "./perfil.dto";

export interface LocalUser {
    token : string;
    email: string;
    perfis: PerfilDTO[];
    nome: string;
}