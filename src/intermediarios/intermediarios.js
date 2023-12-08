let livros = require("../bancoDeDados")


const intermediarioId = (req, res, next) => {
    const { id } = req.params

    if (id > livros.length) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }

    if (id < 0) {
        return res.status(404).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    next()
}

const intermediarioParamObrigatorios = (req, res, next) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return mensagem = { mensagem: "titulo é obrigatorio" }
    }

    if (!autor) {
        return mensagem = { mensagem: "autor é obrigatorio" }
    }

    if (!numPaginas) {
        return mensagem = { mensagem: "numPaginas é obrigatorio" }
    }

    if (!ano) {
        return mensagem = { mensagem: "ano é obrigatorio" }
    }

    next()
}

const intermediarioExisteId = (req, res, next) => {
    const { id } = req.params

    if (id > livros.length) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." })
    }

    if (id < 0) {
        return res.status(404).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    if (!id) {
        return res.status(400).json({ mensagem: "id náo informado" })
    }

    next()
}


module.exports = {
    intermediarioId,
    intermediarioParamObrigatorios,
    intermediarioExisteId
}