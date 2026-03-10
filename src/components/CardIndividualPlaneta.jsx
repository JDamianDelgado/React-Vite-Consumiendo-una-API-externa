export function CardIndividualPlaneta({ planeta }) {
  return (
    <article className="cardIndividualPlaneta">
      <div className="detailHero">
        <div className="detailHeroImage planetDetailImage">
          <img src={planeta.image} alt={planeta.name} />
        </div>
        <div className="detailHeroCopy">
          <span className="sectionEyebrow">Ficha de planeta</span>
          <h1>{planeta.name}</h1>
          <p>{planeta.description || "Sin descripcion disponible."}</p>
        </div>
      </div>

      <div className="statsGrid">
        <article className="statCard">
          <h3>Estado</h3>
          <p>{planeta.isDestroyed ? "Planeta destruido" : "Planeta activo"}</p>
        </article>
        <article className="statCard">
          <h3>Habitantes registrados</h3>
          <p>{planeta.characters?.length || 0}</p>
        </article>
      </div>

      <div className="transformSection">
        <h2>Habitantes</h2>
        {planeta.characters && planeta.characters.length > 0 ? (
          <div className="cardIndividualHabitantes">
            {planeta.characters.map((cha) => (
              <article className="cardHabitantes" key={cha.id || cha.name}>
                <img src={cha.image} alt={cha.name} />
                <p>{cha.name}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="emptyState">
            No hay personajes registrados en este planeta.
          </div>
        )}
      </div>
    </article>
  );
}
