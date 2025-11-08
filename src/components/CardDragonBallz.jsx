import React from "react";
import { fetchPersonaje } from "../features/personajes/personajesSlice";

export function CardDragonBallz({ card, onClick }) {
  if (!card) return null;

  return (
    <div className="CardPersonajes" onClick={onClick}>
      <img
        src={card.image}
        alt={card.name}
        onClick={() => fetchPersonaje(card.id)}
      />
      <h1>{card.name}</h1>
    </div>
  );
}
