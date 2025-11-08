import { useDispatch, useSelector } from "react-redux";
import {
  nextPagePlaneta,
  prevPagePlaneta,
  clearPlaneta,
  fetchPlanetas,
} from "../features/planetas/planetasSlice";
import { useEffect } from "react";
import { CardPlanetas } from "../components/CardPlanetas";
import { CardIndividualPlaneta } from "../components/CardIndividualPlaneta";

export function Planetas() {
  const dispatch = useDispatch();
  const { planetas, planeta, page, loading } = useSelector(
    (state) => state.planetas
  );

  useEffect(() => {
    dispatch(fetchPlanetas(page));
  }, [page, dispatch]);

  return (
    <div>
      {loading && (
        <div>
          <h1>Cargando...</h1>
        </div>
      )}
      {!planeta ? (
        <>
          <h1>Planetas</h1>
          <div className="contenedorPlanetas">
            {planetas.map((planet) => (
              <div key={planet.id}>
                <CardPlanetas planeta={planet} />
              </div>
            ))}
          </div>
          <div className="contenedorButton">
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(prevPagePlaneta())}
            >
              Anterior
            </button>
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(nextPagePlaneta())}
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <div className="contenedorPlanetaIndividual">
          <button
            className="buttonVolver"
            onClick={() => dispatch(clearPlaneta())}
          >
            ⟵ Volver
          </button>
          <CardIndividualPlaneta key={planeta.id} planeta={planeta} />
        </div>
      )}
    </div>
  );
}
