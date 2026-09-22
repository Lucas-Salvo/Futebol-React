import { useState } from "react";
import "./App.css";

const jogadoresFutebol = [
  { id: 1, nome: "Neymar.JR", votos: 0 },
  { id: 2, nome: "Haaland", votos: 0 },
  { id: 3, nome: "Messi", votos: 0 },
  { id: 4, nome: "Pelé", votos: 0 }
];

function App() {
  const [jogadores, setJogadores] = useState(jogadoresFutebol);

  function votar(id) {
    setJogadores(
      jogadores.map((jogador) =>
        jogador.id === id
          ? { ...jogador, votos: jogador.votos + 1 }
          : jogador
      )
    );
  }

  const maiorVoto = Math.max(...jogadores.map((jogador) => jogador.votos));

  const listaJogadores = jogadores.map((jogador) => (
    <li
      key={jogador.id}
      className={`jogador-item ${
        jogador.votos === maiorVoto && jogador.votos > 0 ? "lider" : ""
      }`}
    >
      <span className="jogador-nome">{jogador.nome}</span>

      <span className="jogador-votos">
        {jogador.votos} votos
      </span>

      <button
        className="botao-votar"
        onClick={() => votar(jogador.id)}
      >
        Votar
      </button>
    </li>
  ));

  return (
    <div className="app">
      <h1 className="titulo">Quem é o melhor?</h1>

      <ul className="lista-jogadores">
        {listaJogadores}
      </ul>
    </div>
  );
}

export default App;