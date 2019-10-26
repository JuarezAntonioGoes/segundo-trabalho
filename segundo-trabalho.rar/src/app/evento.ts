export class Evento {

    id: number;
    titulo: string;
    nome: string;

    constructor(id?: number, titulo?: string, nome?: string) {
        this.id = id;  this.titulo = titulo;  this.nome = nome;
    }
}