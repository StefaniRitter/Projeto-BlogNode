// Carregando módulos
import express from 'express'
const app = express()
import { engine } from 'express-handlebars'
// import mongoose from 'mongoose'

// Configurações
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Mongoose
    // Configurar depois

// Rotas

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})




