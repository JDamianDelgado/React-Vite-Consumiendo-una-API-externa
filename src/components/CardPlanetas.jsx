import { useDispatch } from "react-redux";
import { fetchPlaneta } from "../features/planetas/planetasSlice";

export function CardPlanetas({ planeta }) {
  const dispatch = useDispatch();

  return (
    <article className="card-planetas">
      <div className="planetImageWrap">
        <img src={planeta.image} alt={planeta.name} />
      </div>
      <div className="planetCardContent">
        <h2>{planeta.name}</h2>
        <p>{planeta.isDestroyed ? "Destruido" : "Activo"}</p>
      </div>
      <button onClick={() => dispatch(fetchPlaneta(planeta.id))} type="button">
        Ver detalle
      </button>
    </article>
  );
}
