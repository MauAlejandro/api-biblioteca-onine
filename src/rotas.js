const express = require("express")

const app = express()

const {
    exibirLivros,
    filtrarLivroPorId,
    adicionarLivro,
    substituiLivro,
    alterarParametro,
    deletarLivro
} = require("./controladores/livros")

const {
    intermediarioId,
    intermediarioParamObrigatorios,
    intermediarioExisteId
} = require("./intermediarios/intermediarios")


app.get("/livros", exibirLivros)
app.get("/livros/:id", intermediarioId, filtrarLivroPorId)
app.post("/livros", intermediarioParamObrigatorios, adicionarLivro)
app.put("/livros/:id", intermediarioId, intermediarioParamObrigatorios, substituiLivro)
app.patch("/livros/:id", intermediarioExisteId, alterarParametro)
app.delete("/livros/:id", intermediarioExisteId, deletarLivro)


module.exports = app