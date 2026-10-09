import { stats } from "../data/content";

export default function StatBar() {
  return (
    <div className="stats">
      {stats.map((item) => (
        <div className="stat" key={item.label}>
          <div className={`stat-value tone-${item.tone}`}>{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
