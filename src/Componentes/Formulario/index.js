import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoNovoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para fazer parte do time!</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome!"
          obrigatorio={true}
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo!"
          obrigatorio={true}
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite a url da sua imagem!"
          obrigatorio={true}
          value={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa
          label="Time"
          obrigatorio={true}
          itens={props.times}
          valor={time}
          onChange={(evento) => setTime(evento.target.value)}
        />

        <Botao> Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
