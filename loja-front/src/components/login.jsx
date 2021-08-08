import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <h1>Entre</h1>
      <div className="inputs">
        <label>Email:</label>
        <input type="email"></input>
      </div>
      <div className="inputs">
        <label>Senha:</label>
        <input type="password"></input>
      </div>
      <button>Enviar</button>
      <br></br>
      <Link className="link" to="/cadastro">Faça seu cadastro aqui!</Link>
    </div>
  );
}
