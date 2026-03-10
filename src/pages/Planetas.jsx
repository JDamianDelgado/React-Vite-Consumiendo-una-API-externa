import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPlaneta,
  fetchPlanetas,
  nextPagePlaneta,
  prevPagePlaneta,
} from "../features/planetas/planetasSlice";
import { CardPlanetas } from "../components/CardPlanetas";
import { CardIndividualPlaneta } from "../components/CardIndividualPlaneta";

export function Planetas() {
  const dispatch = useDispatch();
  const { planetas, planeta, page, loading, error, totalPages } = useSelector(
    (state) => state.planetas
  );

  useEffect(() => {
    if (!planeta) {
      dispatch(fetchPlanetas(page));
    }
  }, [dispatch, page, planeta]);

  if (loading && !planeta) {
    return (
      <section className="contentPage">
        <div className="statusPanel">
          <div className="loader" />
          <p>Cargando planetas...</p>
        </div>
      </section>
    );
  }

  if (error && !planeta) {
    return (
      <section className="contentPage">
        <div className="statusPanel error">
          <h2>No se pudieron cargar los planetas</h2>
          <p>{error}</p>
          <button
            className="buttonPersonajes"
            onClick={() => dispatch(fetchPlanetas(page))}
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contentPage">
      {!planeta ? (
        <>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Mapa galactico</span>
            <h1>Planetas</h1>
            <p>
              Revisa los mundos del universo Dragon Ball y consulta sus
              habitantes cuando abras cada detalle.
            </p>
          </div>
          <div className="contenedorPlanetas">
            {planetas.map((planet) => (
              <CardPlanetas key={planet.id} planeta={planet} />
            ))}
          </div>
          <div className="contenedorButton">
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(prevPagePlaneta())}
              disabled={page <= 1}
            >
              Anterior
            </button>
            <span className="pageIndicator">
              Pagina {page} de {totalPages}
            </span>
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(nextPagePlaneta())}
              disabled={page >= totalPages}
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <div className="detailWrapper">
          <button
            className="buttonVolver"
            onClick={() => dispatch(clearPlaneta())}
          >
            Volver al listado
          </button>
          <CardIndividualPlaneta planeta={planeta} />
        </div>
      )}
    </section>
  );
}
