import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = {
    background: props.corSecundaria,
    color: props.corPrimaria,
  };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador, index) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={index}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
