import express from "express";

import {produto} from "../controller/produto_controller.js";

let router = express.Router();

router.get("/produto", produto.all);
router.post('/produto', produto.create);
router.put('/produto/:cod_produto', produto.update_nome);
router.put('/produto/:cod_produto', produto.update_preco);
router.put('/produto/:cod_produto', produto.update);
router.delete('/produto/:cod_produto', produto.delete);

export {router};