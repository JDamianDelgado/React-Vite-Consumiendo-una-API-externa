import { useDispatch } from "react-redux";
import { fetchPlaneta } from "../features/planetas/planetasSlice";

export function CardPlanetas({ planeta }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-planetas">
        <h1>{planeta.name}</h1>
        <img src={planeta.image} alt={planeta.name} />
        <button onClick={() => dispatch(fetchPlaneta(planeta.id))}>
          Detalle
        </button>
      </div>
    </>
  );
}
