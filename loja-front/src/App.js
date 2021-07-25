import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Index from "./components/index";
import Lista from "./components/lista";
import Login from "./components/login";
function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const trazer = async () => {
      const info = await axios.get("http://localhost:2020/cadastroProd");
      await setDados(info.data);
      console.log(info.data);
    };
    trazer();
  }, []);

  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/a">Compra</Link>
          </li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Switch>
          <Router exact path="/">
            <Index></Index>
          </Router>
          <Router path="/a">
            <Lista objeto={dados}></Lista>
          </Router>
          <Router path ="/login">
            <Login></Login>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
