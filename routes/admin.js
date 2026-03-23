import express from 'express'
const router = express.Router()

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






export default router