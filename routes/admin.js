import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import Categoria from "../models/Categoria.js";

router.get('/', (req, res) => {
    res.render("admin/index")
})

router.get("/posts", (req, res) => {
    res.send("Página de posts")
})

router.get("/categorias", (req, res) => {
    res.render("admin/categorias")
})

router.get("/categorias/add", (req, res) => {
    res.render("admin/addcategorias")
})

router.post("/categorias/nova", (req, res) => {
    const novaCategoria = ({
        nome: req.body.nome,
        slug: req.body.slug
    })

    new Categoria(novaCategoria).save().then(() => {
        console.log("Sucesso ao salvar categoria!")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        console.log("Erro ao salvar categoria: " + err)
    })
})

export default router