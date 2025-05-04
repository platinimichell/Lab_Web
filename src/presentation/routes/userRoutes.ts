import { Router } from "express";
import { UserController } from "@presentation/controllers/UserController";
import { validateDTO } from "@presentation/controllers/middlewares/validateDTO";
import { UserDTO } from "@presentation/dtos/UserDTO";


const router = Router();
const userController = new UserController();

// router.get("/users", (req, res) => { res.send("User rotes") });

<<<<<<< HEAD
router.post("/users",validateDTO(UserDTO), async(req, res, next) => {
=======
router.post("/users", validateDTO(UserDTO), async (req, res, next) => {
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
    try {
        await userController.createUser(req, res);
    } catch (error) {
        next(error);
    }
<<<<<<< HEAD
} );

router.get("/users", async(req, res, next) => {
=======
});

router.get("/users", async (req, res, next) => {
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
    try {
        await userController.getAllUsers(req, res);
    } catch (error) {
        next(error);
    }
<<<<<<< HEAD
} );
=======
});

router.get("/users/:email", async (req, res, next) => {
    try {
        await userController.getUserByEmail(req, res);
    } catch (error) {
        next(error);
    }
});

>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)

export default router;