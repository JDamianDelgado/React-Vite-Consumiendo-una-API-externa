export function CardIndividualPlaneta({ planeta }) {
  return (
    <div className="cardIndividualPlaneta" key={planeta.name}>
      <h1>{planeta.name}</h1>
      <img src={planeta.image} alt={planeta.name} />
      <p>{planeta.description}</p>
      <h2>Habitantes</h2>
      <div className="cardIndividualHabitantes">
        {planeta.characters && planeta.characters.length > 0 ? (
          planeta.characters.map((cha) => (
            <div className="cardHabitantes" key={cha.name}>
              <img src={cha.image} alt={cha.id} />
              <p>{cha.name}</p>
            </div>
          ))
        ) : (
          <p>No hay personajes</p>
        )}
      </div>
    </div>
  );
}
