import { Link } from "react-router-dom";
import { NavbBar } from "../components/NavBar";
import { Personajes } from "./Personajes";
import { useSelector } from "react-redux";

export function Home() {
  const { personaje } = useSelector((state) => state.personajes);

  return (
    <div className="contenedorHome">
      {!personaje && (
        <img src="./apiDragonBall.png" alt="Logo DB" width={200} />
      )}
      <Personajes></Personajes>
    </div>
  );
}
