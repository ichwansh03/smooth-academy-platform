import { registerStats } from "@/app/data/register";

export default function SlideStats() {
  return (
    <div className="slide-stats">
      {registerStats.map((stat) => (
        <div key={stat.id} className="slide-stat">
          <span className="slide-stat-value">{stat.value}</span>
          <span className="slide-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
