import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css';
import api from "./services/api";//importaçao

function App() {//fuçao capaz de criar duas variaveis diferente

    const [input, setinput] = useState('');
    const [cep, setCEP] = useState({});

      async function handleSearch(){

        if (input === ''){
          alert ("preencha algum CEP!")
          return;
        }

        try{//executa tudo que voce quer 
          const response = await api.get('$(input/json')
          setCEP(response.data)
          setinput("")
        }
        catch{//se acontercer erro com o try o ele sera usado
          alert("erro ao buascar CEP!")
          setinput("")
        }
      }

    return(
      <div className="container">
        <h1 className="title">Buscado de CEP</h1>
        <div className="containerInput">
        <input 
            type="text"
            placeholder="digite seu CEP..."
            value={input}
            onChange={(e) => setinput(e.target.value)}//onchange captura tudo que o usuario digitar,
          />
          <button className="buttonsearch" onClick={handleSearch}>
            <FiSearch size={25} color="#FFF"/> 
          </button>
        </div>
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.lograduro}</span>
          <span>complemento: {cep.complemento}</span>
          <span>bairro: {cep.bairo}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      </div>
    ); // chama a funçao hadshear, qunado o valor do cep for maior que 0 vai renderizar com o codigo objequi.key
    //no cep. filtra as informaçoes 
}

export default App;//se nao exportar a aplicaçao nao funciona, pois esta tornando a aplicaço em publico 