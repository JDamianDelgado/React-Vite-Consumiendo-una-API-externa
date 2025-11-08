import { EfectoZoom } from "./EfectoZoom";

export function CardIndividual({ card }) {
  if (!card) return null;

  return (
    <div className="detallePersonaje" key={card.name}>
      <h1>{card.name}</h1>

      <p>{card.description}</p>
      <div className="cardDetalles">
        <img src={card.image} alt={card.name} />
        <li>
          <h3>Datos</h3>
          <ul>Sexo: {card.gender}</ul>
          <ul>Race: {card.race}</ul>
          <ul>Ki: {card.ki}</ul>
          <ul>Equipo: {card.affiliation}</ul>
          <ul>Planeta: {card.originPlanet.name}</ul>
          <img src={card.originPlanet.image} alt={card.originPlanet.name} />
        </li>
      </div>
      {!card.transformations || card.transformations.length === 0 ? (
        <h2 className="transformaciones">Sin transformaciones</h2>
      ) : (
        <>
          <h2>Transformaciones</h2>
          <div className="transformaciones">
            {card.transformations.map((trans) => (
              <div className="cardTransformacion" key={trans.name}>
                <img src={trans.image}></img>
                <h3>{trans.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
