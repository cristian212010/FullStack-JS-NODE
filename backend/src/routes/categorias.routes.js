import { Router } from "express";
import { methodHTTP as categoriaController } from "../controller/categoria.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategorias);
router.delete("/:id", categoriaController.deleteCategoria);
router.get("/:id", categoriaController.getCategoria);
router.put("/:id", categoriaController.updateCategoria);

export default router;