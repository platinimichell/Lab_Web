import express from "express";
import dotenv from "dotenv";
import { Database } from "infrasctructure/config/Database";

dotenv.config();

async function startApp() {
    await Database.init();
    console.log("Banco de dados inicializado com sucesso!");

    const app = express();
    app.use(express.json());

    const userRoutes = await import("@presentation/routes/userRoutes");
    app.use("/api", userRoutes.default);

<<<<<<< HEAD
=======
    const contatoRoutes = await import("@presentation/routes/contatoRoutes");
    app.use("/api", contatoRoutes.default);

>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Application is running on port ${PORT}`));
}

startApp();

/*
const app = express();
app.use(express.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Application is running on port ${PORT}`));
*/