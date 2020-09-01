import React, { useState } from "react";
import "./styles.css";

//ELEMENTO
// COM JSX
const elemento = <p>Olá Mundo!</p>;

//SEM JSX
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Sem JSX")
);

// COMPONENTE
export default function App(props) {
  // Estados do Jogo: entrada, rodando,fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);

  //numero de palpites
  const [numPalpites, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(0);
    setNumPalpite(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setNumPalpite(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Começar Novamente !</button>
      </div>
    );
  }

  // Palpites de 0 <> 300
  // número de palpites que a máquina deu

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}
