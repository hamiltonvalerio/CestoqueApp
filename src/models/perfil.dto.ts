import { PaginaDTO } from './pagina.dto';
export interface PerfilDTO {
    id : string;
    nome : string;
    descricao : string;
    pagina : PaginaDTO[];
    selecionado?: boolean;
}