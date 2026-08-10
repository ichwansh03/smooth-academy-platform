import { hero } from "@/app/data/content";

export default function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">{hero.badge}</span>
      <h1>
        {hero.title.line1}
        <br />
        {hero.title.line2Prefix}
        <span>{hero.title.highlight}</span>
      </h1>
      <p>{hero.description}</p>
      <button type="button" className="btn btn-primary">
        {hero.cta}
      </button>
    </section>
  );
}
