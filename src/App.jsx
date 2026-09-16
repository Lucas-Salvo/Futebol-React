import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Voto } from "./components/Voto";

const jogadoresFutebol = [
  {id: 1, nome: "Neymar.JR"},
  {id: 2, nome: "Halland"},
  {id: 3, nome: "Messi"}
]

function App () {
  const [jogadores, setJogadores] = useState([jogadoresFutebol])

useEffect (() =>{
    setJogadores(jogadoresFutebol);
}, []);

const setVotos = (id) =>{
  setJogadores((jogadorVoto) =>(
    jogadorVoto.map((voto)=>
      
    )
  ))
}

  return(
    <div>
      <Header></Header>
      <main className="voto">{jogadores.map((jogador)=>(
        <Voto key={jogador.id} jogador={jogador}></Voto>
      ))}
      </main>
    </div>

    
  )
};

export default App