import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPersonajes,
  fetchPersonaje,
  nextPage,
  prevPage,
  clearPersonaje,
} from "../features/personajes/personajesSlice";
import { CardDragonBallz } from "../components/CardDragonBallz";
import { CardIndividual } from "../components/CardIndividual";
export function Personajes() {
  const dispatch = useDispatch();
  const { personajes, personaje, page, loading } = useSelector(
    (state) => state.personajes
  );

  useEffect(() => {
    dispatch(fetchPersonajes(page));
  }, [page, dispatch]);

  return (
    <div className="contenedorPersonajes">
      {loading && (
        <div>
          <img
            src="https://i.pinimg.com/originals/b1/07/b0/b107b0597cb3885e428c72d1a20bdabe.gif"
            alt=""
          />
          <p>Cargando.. </p>
        </div>
      )}

      {!personaje ? (
        <div className="contenedorPersonajes">
          <h1>Personajes</h1>
          <div className="boxPersonajes">
            {personajes.map((pers) => (
              <div key={pers.id}>
                <CardDragonBallz
                  key={pers.name}
                  card={pers}
                  onClick={() => dispatch(fetchPersonaje(pers.id))}
                />
              </div>
            ))}
          </div>
          <div className="contenedorButton">
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(prevPage())}
            >
              {" "}
              ⟵ Anterior
            </button>
            <button
              className="buttonPersonajes"
              onClick={() => dispatch(nextPage())}
            >
              Siguiente ⟶
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="contenedorPersonaje">
            <CardIndividual card={personaje} />
          </div>

          <button
            className="buttonVolver"
            onClick={() => dispatch(clearPersonaje())}
          >
            ⟵ Volver
          </button>
        </>
      )}
    </div>
  );
}
