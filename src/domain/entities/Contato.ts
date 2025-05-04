export class Contato {
    id?: number;
    id_usuario: number;
    telefone_celular: string;
    telefone_recado: string;
    email: string;
    endereco: string;

    constructor(_id_usuario: number, _telefone_celular: string, _telefone_recado: string, _email: string, _endereco: string){
        this.id_usuario = _id_usuario;
        this.telefone_celular = _telefone_celular;
        this.telefone_recado = _telefone_recado;
        this.email = _email;
        this.endereco = _endereco;
    }
}