import { Request, Response } from 'express';
import { CreateUserUseCase } from '@application/useCases/CreateUserUseCase';
import { UserRepository } from 'infrasctructure/repositories/UserRepository';
<<<<<<< HEAD
=======
import { GetUserByEmailUseCase } from '@application/useCases/GetUsersByEmailUseCase';
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
import { GetAllUsersUseCase } from '@application/useCases/GetAllUsersUseCase';
import { UserDTO } from '@presentation/dtos/UserDTO';

export class UserController {
    private createUserUseCase: CreateUserUseCase;
    private getAllUserUseCase: GetAllUsersUseCase;
<<<<<<< HEAD
=======
    private getUserByEmailUseCase: GetUserByEmailUseCase;
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)

    constructor() {
        const userRepository = new UserRepository();
        this.createUserUseCase = new CreateUserUseCase(userRepository);
        this.getAllUserUseCase = new GetAllUsersUseCase(userRepository);
<<<<<<< HEAD
=======
        this.getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
    }

    async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const user = await this.createUserUseCase.execute(name, email);

            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }
    //getAllUsers

    async getAllUsers(req: Request, res: Response) {
        try {
            const users: UserDTO[] = await this.getAllUserUseCase.execute();

            if (!users || users.length == 0) {
                return res.status(404).json(users);
            }

            return res.status(200).json(users);

        } catch (error) {
            return res.status(400).json({ error: (error as Error).message })
        }
    }
<<<<<<< HEAD
=======

    async getUserByEmail(req: Request, res: Response) {
        try {
            const user: UserDTO | null = await this.getUserByEmailUseCase.execute(req.params.email);

            if (!user) {
                return res.status(404).json(user);
            }

            return res.status(200).json(user);

        } catch (error) {
            return res.status(400).json({ error: (error as Error).message })
        }
    }
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
}

