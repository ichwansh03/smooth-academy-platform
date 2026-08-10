import { stats } from "@/app/data/content";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={stat.rating ? "stat-item rating" : "stat-item"}
        >
          <div className="stat-number">
            {stat.rating && <span className="star">★</span>}
            {stat.value}
            {stat.suffix && <span className="plus">{stat.suffix}</span>}
          </div>
          <div className="stat-label">
            {stat.rating ? (
              <>
                {stat.note} <strong>{stat.noteStrong}</strong> {stat.noteEnd}
              </>
            ) : (
              stat.label
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
