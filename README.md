# api-biblioteca-onine

### foi implementada uma API REST nodejs. No arquivo BancoDeDados.js tem um arrey de objetos que representam os livros da biblioteca. Cada livro possui as propriedades: id, titulo, autor, ano e numPaginas.

## O sistema da biblioteca possui métodos para:

### -Consultar a coleção

### -Consultar um livro através do ID

### -Adicionar um novo livro

### -Alterar um livro existente

### -Remover livros

# modo de uso:

### todas as funcionalidades serão acessadas pela url (http://localhost:3000)


## Consulta da coleção

### acessando a (http://localhost:3000/livros) sera exibida a coleção de livros

## Consulta de um livro por ID

### pela url (http://localhost:3000) + um paremetro com o numero de id do livro sera exibido apenas o livro referente ao id

## Adicionar um livro

### no body da requisição devera ser enviado um objeto com os parametros: titulo, autor ano e numPaginas para ser adicionado um livro na coleção

## Substituindo um livro

### alem de indicar no parametro de rota o id do livro a ser sudstituido no body da requisição devera ser enviado um objeto com os parametros do novo livro

## Alterando um livro

### pela url (http://localhost:3000/livros) devera ser enviado no body da requisição um objeto com os parametros a serem alterado, e indicar no parametro de rota o id do livro a ser alterado

## Remoção de um livro

### na url (http://localhost:3000/livros) indique no parametro de rota o id do livro a ser removido


# bibliotecas utilizadas

### -Express
### -Nodemon





