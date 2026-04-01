// Carregando módulos
import express from 'express'
const app = express()
import handlebars from 'express-handlebars'
import admin from "./routes/admin.js"
import mongoose from 'mongoose'

// Configurações
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Mongoos
   mongoose.Promise = global.Promise

   mongoose.connect("mongodb://localhost/blogapp").then(() => {
    console.log("CONECTOU AO BANCO!")
   }).catch((err) => {
    console.log("Erro ao conectar com o banco! " + err)
   })

// Public
app.use(express.static("public"))

// Rotas
app.use('/admin', admin)

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})




