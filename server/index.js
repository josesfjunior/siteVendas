const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 2020;
const cadastroProd = require("./routes/cadastroProd");
const cadastroUser = require("./routes/cadastroUser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Rota Main do Middware
app.get("/", function (req, res) {
  res.send("oi");
});
// Rota de Cadastro de Produtos
app.use("/cadastroProd", cadastroProd);
// Rota de Cadastro de Usuarios
app.use("/cadastroUser", cadastroUser);

app.listen(port, () =>
  console.log(
    `servidor rodando na porta ${port} link: http://localhost:${port}`
  )
);
