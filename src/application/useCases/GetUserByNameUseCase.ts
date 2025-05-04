import { Contato } from "@domain/entities/Contato";
import { IContatoRepository } from "@domain/repositories/IContatoRepository";
import { UserDTO } from "@presentation/dtos/UserDTO";

export class GetUserByNameUseCase {
    constructor(private contatoRepository: IContatoRepository){}

    async execute(id_usuario: number): Promise <Contato | null> {
        return await this.contatoRepository.findByName(id_usuario) ?? null;
    }
}