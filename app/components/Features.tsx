import { features } from "@/app/data/content";

export default function Features() {
  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
