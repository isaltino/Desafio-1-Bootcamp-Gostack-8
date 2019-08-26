const express = require("express");
const server = express();
server.use(express.json());
let NRequisicoes = 1;
const projects = [{ id: "1", title: "teste 1", tesks: [] }];

// Middleware Global - Lista o numero de requisiçoes ja feita a API
server.use((req, res, next) => {
  console.log(NRequisicoes++);
  return next();
});

// Middleware especifico - Checa se o valor de id recebido na rota params existe na base.
function checkProjectsId(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ Erro: "ID de projeto não encontrado!" });
  }

  return next();
}

// Rota /projects - Rota que lista os projetos cadastrados na base.
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// Rota /projects - Rota que lista o projeto cadastrados na base filtrando pelo ID.
server.get("/projects/:id", checkProjectsId, (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  return res.json(project);
});

// Rota /projects - Rota que cadastra um projeto com as infos passada na rota body.
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const item = { id, title, tesks: [] };

  projects.push(item);

  return res.json(projects);
});

// Rota /projects/:id - Rota que edita um projeto com as infos de id passada na rota params e o valor de title contido na rota body.
server.put("/projects/:id", checkProjectsId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;
  return res.json(projects);
});

// Rota /projects/:id - Rota que deleta um projeto com a infos de ID passada na rota params.
server.delete("/projects/:id", checkProjectsId, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.json({ ok: true });
});

// Rota /projects/:id/tasks - Rota que cadastra um tarefa em um determinado projeto com base na info de ID passada na rota params e title na rota body.
server.post("/projects/:id/tasks", checkProjectsId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tesks.push(title);
  return res.json(projects);
});

server.listen(3333);
