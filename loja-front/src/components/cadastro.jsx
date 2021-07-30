import { useState } from "react";
import "../layouts/cadastro.css";
import axios from "axios";
import FormValidation from "../validation";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(false);
  const [status, setStatus] = useState(false);

  const Validar = () => {
    const post = {
      nome: nome,
      email: email,
      senha: senha,
    };
    FormValidation.isValid(post)
      .then((valido) => {
        axios.post("http://localhost:2020/cadastroUser", post);
        setStatus(valido);
      })
      .catch((err) => {
        console.log(`Deu erro`);
      });
  };

  return (
    <div className="container2">
      <h1>Cadastro</h1>
      <div className="inputs2">
        <label>Nome:</label>
        <input
          type="text"
          onChange={({ ...e }) => setNome(e.target.value)}
        ></input>
      </div>
      <div className="inputs2">
        <label>Email:</label>
        <input
          type="email"
          onChange={({ ...e }) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="inputs2">
        <label>Senha:</label>
        <input
          type="password"
          onChange={({ ...e }) => setSenha(e.target.value)}
        ></input>
      </div>
      <label>{status === true ? "sucesso" : ""}</label>
      <button onClick={Validar}>Enviar</button>
    </div>
  );
}
