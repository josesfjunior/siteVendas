const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 2020;
const cadastro = require("./routes/cadastro")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res, next) {
  res.send("oi");
});

app.use("/vai", cadastro );

app.listen(port, () =>
  console.log(
    `servidor rodando na porta ${port} link: http://localhost:${port}`
  )
);
