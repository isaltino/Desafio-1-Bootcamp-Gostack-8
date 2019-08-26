# Desafio 01 - Bootcamp Gostack 8

## Descrição

- Nesse código eu implemento minha leitura do desafio 1 do primeiro módulo do Bootcamp Gostack 8 - Rocketseat 2019
- Tratasse de um serviço CRUD de uma API de projetos e suas tarefas.
- Código para exemplificar conhecimento básicos com o framework express
- V1.0

## Rotas

### Criando Projeto

- Metodo: `POST`
- URL: http://localhost:3333/projects
- Parâmetro: Body

  ```js
  {
    id: "1",
    title: 'Novo projeto',
    tasks: []
  }
  ```

### Editando Projeto

- Metodo: `PUT`
- URL: http://localhost:3333/projects/:id
- Parâmetro: params URL e Body

  ```js
  {
    title: 'Novo titulo do projeto',
  }
  ```

### Criando Tarefas

- Metodo: `POST`
- URL: http://localhost:3333/projects/:id/tasks
- Parâmetro: params URL e Body

  ```js
  {
    title: 'Novo tarefa dentro do projeto :id',
  }
  ```

### Listando Projetos

- Metodo: `GET`
- URL: http://localhost:3333/projects/:id
- Parâmetro: params URL

### Listando todos os Projetos

- Metodo: `GET`
- URL: http://localhost:3333/projects
- Parâmetro: nenhum
