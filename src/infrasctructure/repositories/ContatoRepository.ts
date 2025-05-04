import { IContatoRepository } from "@domain/repositories/IContatoRepository";
import { Database } from "infrasctructure/config/Database";
import { UserDTO } from "@presentation/dtos/UserDTO";
import { plainToInstance } from "class-transformer";
import { Contato } from "@domain/entities/Contato";

export class ContatoRepository implements IContatoRepository {
    private pool = Database.getConnection();
    // a partir daqui

    async findByName(id_usuario: number): Promise<Contato | null> {
        if (!id_usuario) {
            throw new Error('ID do usuário não informado para busca.');
        }
        try {
            const [result]: any = await this.pool.execute(
                "SELECT * FROM users JOIN contato ON id_usuario = users.id WHERE id_usuario = ?", 
                [id_usuario]
            );
            
            const contato = result as Contato[];
            return contato.length ? contato[0] : null;
    
        } catch (error) {
            console.log(`Erro ao persistir ao recuperar registro (${id_usuario}) no bd: ${error}`);
            throw new Error(`Erro ao persistir ao recuperar registro (${id_usuario}) no bd: ${error}`);
        }
    }

    async saveContato(id_usuario: Contato): Promise<Contato> {
        
        try {
            const [result]: any = await this.pool.execute(
                "INSERT into contato (id_usuario, telefone_celular, telefone_recado, email, endereco) VALUES (?, ?, ?, ?, ?)", 
                [id_usuario.id_usuario, id_usuario.telefone_celular, id_usuario.telefone_recado, id_usuario.email, id_usuario.endereco]
            );

            id_usuario.id = result.insertId;

            return id_usuario;
        } catch (error) {
            console.log(`Erro ao persistir o registro (${id_usuario.email}) no bd: ${error}`);
            throw new Error(`Erro ao persistir o registro (${id_usuario.email}) no bd: ${error}`);
        }
    }

}