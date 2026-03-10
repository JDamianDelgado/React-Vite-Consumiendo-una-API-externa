export function CardIndividual({ card }) {
  if (!card) {
    return null;
  }

  return (
    <article className="detallePersonaje">
      <div className="detailHero">
        <div className="detailHeroImage">
          <img src={card.image} alt={card.name} />
        </div>
        <div className="detailHeroCopy">
          <span className="sectionEyebrow">Ficha de personaje</span>
          <h1>{card.name}</h1>
          <p>{card.description || "Sin descripcion disponible."}</p>
        </div>
      </div>

      <div className="statsGrid">
        <article className="statCard">
          <h3>Datos base</h3>
          <ul className="detailsList">
            <li>Genero: {card.gender || "No disponible"}</li>
            <li>Raza: {card.race || "No disponible"}</li>
            <li>Ki: {card.ki || "No disponible"}</li>
            <li>Afiliacion: {card.affiliation || "No disponible"}</li>
          </ul>
        </article>

        <article className="statCard">
          <h3>Planeta de origen</h3>
          {card.originPlanet ? (
            <div className="originPlanetCard">
              <img src={card.originPlanet.image} alt={card.originPlanet.name} />
              <strong>{card.originPlanet.name}</strong>
            </div>
          ) : (
            <p>No disponible.</p>
          )}
        </article>
      </div>

      <div className="transformSection">
        <h2>Transformaciones</h2>
        {!card.transformations || card.transformations.length === 0 ? (
          <div className="emptyState">
            Este personaje no tiene transformaciones.
          </div>
        ) : (
          <div className="transformaciones">
            {card.transformations.map((trans) => (
              <article
                className="cardTransformacion"
                key={trans.id || trans.name}
              >
                <img src={trans.image} alt={trans.name} />
                <h3>{trans.name}</h3>
                {/* <p>{trans.ki || "Ki no disponible"}</p> */}
              </article>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
