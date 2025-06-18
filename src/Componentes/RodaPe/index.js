import "./RodaPe.css";

const RodaPe = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url("/img-rodape/fundo.png")` }}
    >
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/img-rodape/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/img-rodape/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/img-rodape/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/img-rodape/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Bruno.</p>
      </section>
    </footer>
  );
};

export default RodaPe;
