import { IContatoRepository } from "@domain/repositories/IContatoRepository";
import { Contato } from "@domain/entities/Contato";

export class CreateContatoUseCase {
    constructor(private contatoRepository: IContatoRepository){}

    async execute(id_usuario: number, telefone_celular: string, telefone_recado: string, email: string, endereco: string): Promise<Contato> {
        //const existingName = await this.userRepository.findByName(email);

        //if (existingName) {
           // throw new Error("Já existe um usuário registrado com este e-mail.");
       // }

        const contato = new Contato(id_usuario, telefone_celular, telefone_recado, email, endereco);

        return await this.contatoRepository.saveContato(contato);
    }

}