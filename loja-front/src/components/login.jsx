import { BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom";
import Cadastro from "./cadastro";

export default function Login() {
  return (
    <Router>
      <div>
        <h1>Login</h1>
        <div>
          <div>
            <label>Usuario:</label>
            <input type="email"></input>
          </div>
          <div>
            <label>Senha:</label>
            <input type="password"></input>
          </div>
          <button>Enviar</button>
          <br></br>
        </div>
      </div>
      <Link to="/Cadastro">Ainda Não é cadastrado? faça login aqui</Link>
      <Switch>
        <Router exact path="/Cadastro">
          <Cadastro></Cadastro>
        </Router>
      </Switch>
    </Router>
  );
}
