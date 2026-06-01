export default function KpiStrip({ items }) {
  return (
    <div className="kpi-strip">
      {items.map((item) => (
        <div className="kpi-item" key={item.label}>
          <div className="kpi-value">{item.value}</div>
          <div className="kpi-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
