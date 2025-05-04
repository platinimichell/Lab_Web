import { Contato } from "@domain/entities/Contato";
import { UserDTO } from "@presentation/dtos/UserDTO";

export interface IContatoRepository {
    saveContato(contato: Contato): Promise<Contato>;
    findByName(id_usuario: number): Promise<Contato | null>;
}