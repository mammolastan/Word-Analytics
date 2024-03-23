export default function Stats({
  numberOfCharacters,
  faceCharLeft,
  instaCharLeft,
  numberofWords,
}) {
  return (
    <section className="stats">
      <Stat
        label="Words"
        number={numberofWords}
      />
      <Stat
        label="Characters"
        number={numberOfCharacters}
      />
      <Stat
        number={instaCharLeft}
        label="Instagram"
      />
      <Stat
        number={faceCharLeft}
        label="Facebook"
      />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className="stat__number">{number ? number : 0}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
