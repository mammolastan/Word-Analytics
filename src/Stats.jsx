export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat
        label="Words"
        number={stats.numberofWords}
      />
      <Stat
        label="Characters"
        number={stats.numberOfCharacters}
      />
      <Stat
        number={stats.instaCharLeft}
        label="Instagram"
      />
      <Stat
        number={stats.faceCharLeft}
        label="Facebook"
      />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number ? number : 0}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
