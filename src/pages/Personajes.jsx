import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPersonaje,
  fetchPersonaje,
  fetchPersonajes,
  nextPage,
  prevPage,
} from "../features/personajes/personajesSlice";
import { CardDragonBallz } from "../components/CardDragonBallz";
import { CardIndividual } from "../components/CardIndividual";

export function Personajes() {
  const dispatch = useDispatch();
  const { personajes, personaje, page, loading, error, totalPages } =
    useSelector((state) => state.personajes);

  useEffect(() => {
    if (!personaje) {
      dispatch(fetchPersonajes(page));
    }
  }, [dispatch, page, personaje]);

  if (loading && !personaje) {
    return (
      <section className="contentPage">
        <div className="statusPanel">
          <div className="loader" />
          <p>Cargando personajes...</p>
        </div>
      </section>
    );
  }

  if (error && !personaje) {
    return (
      <section className="contentPage">
        <div className="statusPanel error">
          <h2>No se pudieron cargar los personajes</h2>
          <p>{error}</p>
          <button
            className="buttonPersonajes"
            onClick={() => dispatch(fetchPersonajes(page))}
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contentPage">
      {!personaje ? (
        <>
          <div className="sectionHeader">
            <span className="sectionEyebrow">Explorador</span>
            <h1>Personajes</h1>
            <p>
              Consulta el elenco de Dragon Ball y abre cada ficha para ver su
              descripcion, origen y transformaciones.
            </p>
          </div>
          <div className="boxPersonajes">
            {personajes.map((pers) => (
              <CardDragonBallz
                key={pers.id}
                card={pers}
                onClick={() => dispatch(fetchPersonaje(pers.id))}
              />
            ))}
          </div>
          <div className="contenedorButton">
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(prevPage())}
              disabled={page <= 1}
            >
              Anterior
            </button>
            <span className="pageIndicator">
              Pagina {page} de {totalPages}
            </span>
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(nextPage())}
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
            onClick={() => dispatch(clearPersonaje())}
          >
            Volver al listado
          </button>
          <CardIndividual card={personaje} />
        </div>
      )}
    </section>
  );
}
