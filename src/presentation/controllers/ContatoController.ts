import { Request, Response } from 'express';
import { UserDTO } from '@presentation/dtos/UserDTO';
import { Contato } from '@domain/entities/Contato';
import { GetUserByNameUseCase } from '@application/useCases/GetUserByNameUseCase';
import { CreateContatoUseCase } from '@application/useCases/CreateContatoUseCase';
import { ContatoRepository } from 'infrasctructure/repositories/ContatoRepository';

export class ContatoController {
    private getUserByNameUseCase: GetUserByNameUseCase;
    private createContatoUseCase: CreateContatoUseCase;

    constructor() {
        const contatoRepository = new ContatoRepository();
        this.getUserByNameUseCase = new GetUserByNameUseCase(contatoRepository);
        this.createContatoUseCase = new CreateContatoUseCase(contatoRepository);
    }

    //a partir daqui

    async getUserByName(req: Request, res: Response) {
        try {
            const id_usuario: Contato | null = await this.getUserByNameUseCase.execute(Number(req.params.id_usuario));

            if (!id_usuario) {
                return res.status(404).json(id_usuario);
            } 

            return res.status(200).json(id_usuario);

        } catch (error) {
            return res.status(400).json({ error: (error as Error).message })
        }
    }

    async createContato(req: Request, res: Response) {
        try {
            const { id_usuario, telefone_celular, telefone_recado, email, endereco } = req.body;
            const contato = await this.createContatoUseCase.execute(id_usuario, telefone_celular, telefone_recado, email, endereco);

            return res.status(201).json(contato);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }
}

