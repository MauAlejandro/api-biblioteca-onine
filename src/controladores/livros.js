let livros = require("../bancoDeDados")

let identificador = 3


const exibirLivros = (req, res) => {
    let resultado = livros

    res.status(200).json(resultado)
}

const filtrarLivroPorId = (req, res) => {
    const { id } = req.params


    let resultado = livros.find((livro) => {
        return livro.id == id
    })

    res.status(200).json(resultado)
}

const adicionarLivro =  (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
  
    
    let livroParaAdicionar = {
        id: identificador++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }

    livros.push(livroParaAdicionar)
    
    res.status(201).json({ mensagem: "Livro adicionado" })
}

const substituiLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    console.log(livros.id)
    console.log(id)
    let indiceParaAlterar = livros.findIndex((livro) => {
        return livro.id == id
    })

    let livroParasubstituir = {
        id: identificador++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }

    livros.splice(indiceParaAlterar, 1, livroParasubstituir)

    res.status(200).json({ mensagem: "livro substituido" })

}

const alterarParametro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body


    let indiceParaAlterar = livros.findIndex((livro) => {
        return livro.id == id
    })

    
    if (titulo) {
        livros[indiceParaAlterar].titulo = titulo
    }

    if (autor) {
        livros[indiceParaAlterar].autor = autor
    }

    if (ano) {
        livros[indiceParaAlterar].ano = ano
    }

    if (numPaginas) {
        livros[indiceParaAlterar].numPaginas = numPaginas
    }

    res.status(200).json({ "mensagem": "Livro alterado." })

}

const deletarLivro = (req, res) => {
    const { id } = req.params

   


    let livrosFiltrados = livros.filter((livro) => {
        return livro.id != id
    })


    livros = livrosFiltrados

    res.status(200).json({ "mensagem": "Livro removido." })


}


module.exports = {
    exibirLivros,
    filtrarLivroPorId,
    adicionarLivro,
    substituiLivro,
    alterarParametro,
    deletarLivro
}