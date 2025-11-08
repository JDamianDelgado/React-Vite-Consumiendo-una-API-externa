import { useState } from "react";

export function EfectoZoom({ item }) {
  const [zoom, setZoom] = useState(false);

  return (
    <div key={item.name}>
      <h3>{item.name}</h3>
      {item.ki ? <p>Ki: {item.ki}</p> : <p>{item.isDestroyed}</p>}

      <img
        src={item.image}
        alt={item.name}
        height={zoom ? 400 : 200}
        onClick={() => setZoom(!zoom)}
      />
    </div>
  );
}
