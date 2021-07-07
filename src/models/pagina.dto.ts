import { PerfilDTO } from './perfil.dto';
export interface PaginaDTO {
    id : string;
    nome : string;
    perfis : PerfilDTO[];
}