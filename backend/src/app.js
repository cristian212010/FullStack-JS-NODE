import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"
import cors from "cors";

const app = express();

app.set("port", 5000);


const configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/api/categorias", categoriasRoutes);


export default app;