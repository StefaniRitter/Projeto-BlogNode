// Carregando módulos
import express from 'express'
const app = express()
import handlebars from 'express-handlebars'
import admin from "./routes/admin.js"

// import mongoose from 'mongoose'

// Configurações
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Mongoose
    // Configurar depois

// Public
app.use(express.static("public"))

// Rotas
app.use('/admin', admin)

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})




