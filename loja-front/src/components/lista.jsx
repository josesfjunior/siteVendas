import "../layouts/lista.css";

function lista(props) {
  const objeto = props.objeto;
  return (
    <div className="card-items">
      {objeto.map((items) => {
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

export default lista;