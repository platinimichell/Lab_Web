import { Router } from "express";
import { ContatoController } from "@presentation/controllers/ContatoController";
import { validateDTO } from "@presentation/controllers/middlewares/validateDTO";
import { UserDTO } from "@presentation/dtos/UserDTO";


const router = Router();
const contatoController = new ContatoController();

// router.get("/users", (req, res) => { res.send("User rotes") });

// Editei a partir daqui

router.get("/contato/:id_usuario", async (req, res, next) => {
    try {
        await contatoController.getUserByName(req, res);
    } catch (error) {
        next(error);
    }
});

//router.post("/contato", validateDTO(UserDTO), async (req, res, next) => {
router.post("/contato", async (req, res, next) => {
    try {
        await contatoController.createContato(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;