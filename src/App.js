import './App.css';
import Boton from "./componentes/botons.jsx"
import { Contador } from "./componentes/contador.jsx"
import { useState } from "react"


function App() { 

  const [numClicks, setNumClicks] = useState(0) 


  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className="App"> 
      <div className="logo-contenedor">
        <img className='logo' 
        src= {"https://st.depositphotos.com/1003348/2140/i/950/depositphotos_21405631-stock-photo-bright-sunset-panorama.jpg"}
        alt="este es un logo" 
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>  
        <Boton
          texto="Click"
          esBotonDeClick={ true }
          manejarClick={manejarClick}
        />

        <Boton
        texto="Reiniciar"
        esBotonDeClick={ false }
        manejarClick={reiniciarContador}
        />
      
      </div>
    </div>
  );
}

export default App;

