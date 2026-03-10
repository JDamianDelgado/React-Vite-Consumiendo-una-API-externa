import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="homePage">
      <div className="heroPanel">
        <div className="heroCopy">
          <span className="heroBadge">Dragon Ball API Explorer</span>
          <h1>Explora personajes y planetas</h1>
          <p></p>
          <div className="heroActions">
            <Link className="ctaButton primary" to="/personajes">
              Ver personajes
            </Link>
            <Link className="ctaButton secondary" to="/planetas">
              Ver planetas
            </Link>
          </div>
        </div>
        <div className="heroArtwork">
          <img src="/apiDragonBall.png" alt="Dragon Ball API" />
        </div>
      </div>

      <div className="highlightGrid">
        <article className="infoCard">
          <h2>Navegacion mas limpia</h2>
          <p>Gracias a router se pueden navegar sin complicaciones.</p>
        </article>
        <article className="infoCard">
          <h2>Estados mas estables</h2>
          <p>
            Los estados de la app estan separados y se manejan con Redux
            Toolkit.
          </p>
        </article>
        <article className="infoCard">
          <h2>Diseno responsive</h2>
          <p>Toda la pagina es responsive para cualquier dispositivo.</p>
        </article>
      </div>
    </section>
  );
}
