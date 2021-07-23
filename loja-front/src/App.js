import axios from "axios";
import React, { useState, useEffect } from "react";
import Lista from './components/lista'
function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const trazer = async () => {
      const info = await axios.get("http://localhost:2020/vai");
      await setDados(info.data);
      console.log(info.data);
    };
    trazer();
  }, []);

  return (
    <div className="App">
      <section>
        <div>
        <h1>Olá</h1>
          <Lista objeto = {dados}></Lista>
        </div>
      </section>
    </div>
  );
}

export default App;