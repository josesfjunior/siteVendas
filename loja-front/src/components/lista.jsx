import React, { useState, useEffect } from "react";
import axios from "axios";
import "../layouts/lista.css";

function Lista() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const Trazer = async () => {
      const info = await axios.get("http://localhost:2020/cadastroProd");
      await setDados(info.data);
      console.log(info.data);
    };
    Trazer();
  }, []);
  return (
    <div className="card-items">
      {dados.map((items) => {
        return (
          <div key={items._id} className="item-unico">
            <ul>
              <li>
                <label>Id: {items._id}</label>
              </li>
              <li>
                <label>Nome:{items.nome}</label>
              </li>
              <li>
                <label>Preço :{items.preco}</label>
              </li>
              <img src={items.imagem}></img>

              <label>Quantidade:</label>
              <input type="number"></input>
              <button>Comprar</button>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
