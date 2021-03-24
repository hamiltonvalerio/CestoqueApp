import { CategoriaDTO } from "./categoria.dto";

export class CCategoriaDTO implements CategoriaDTO{
    id : string;
    nome : string;

    constructor(cat: CategoriaDTO){
        this.id = cat.id;
        this.nome = cat.nome;
    }
}