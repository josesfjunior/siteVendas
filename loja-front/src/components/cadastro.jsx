import { useState } from "react";
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

  //grid md:justify-items-center items-center
  //md:w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4

  return (
    <div className="lg:flex h-screen">
      <div className="lg:my-auto lg:mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <h1>Cadastro</h1>
        <div className="md:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome:
          </label>
          <input
            type="text"
            onChange={({ ...e }) => setNome(e.target.value)}
            className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={({ ...e }) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha:
          </label>
          <input
            className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            onChange={({ ...e }) => setSenha(e.target.value)}
          ></input>
        </div>
        <label>{status === true ? "sucesso" : ""}</label>
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          onClick={Validar}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
