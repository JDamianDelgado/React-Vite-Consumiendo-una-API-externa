export function CardDragonBallz({ card, onClick }) {
  if (!card) {
    return null;
  }

  return (
    <button className="CardPersonajes" onClick={onClick} type="button">
      <div className="cardImageWrap">
        <img src={card.image} alt={card.name} />
      </div>
      <div className="cardContent">
        <h2>{card.name}</h2>
        <p>{card.race || "Origen desconocido"}</p>
      </div>
    </button>
  );
}
