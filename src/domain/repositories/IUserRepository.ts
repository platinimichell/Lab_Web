<<<<<<< HEAD
=======
import { Contato } from "@domain/entities/Contato";
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
import { User } from "@domain/entities/User";
import { UserDTO } from "@presentation/dtos/UserDTO";

export interface IUserRepository {
    save(user: User): Promise<User>;
<<<<<<< HEAD
    findByEmail(email: string): Promise<User | null>
    findById(id: number): Promise<User | null>
    findAll(): Promise<UserDTO[] | null>
=======
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    findAll(): Promise<UserDTO[] | null>;
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
}