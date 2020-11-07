const express = require("express")
const mongoose = require("mongoose")

const app = express()

//string de conexão
mongoose.connect("mongodb://localhost:27017/clientes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//conexão com o mongo
let db = mongoose.connection

//captura de erro ou sucesso na conexão
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () => {
  console.log("Conexão realizada com sucesso!")
})

//rotas
const clientes = require("./routes/clientesRoute")

//configurar o parser do JSON
app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/clientes", clientes)

module.exports = app
