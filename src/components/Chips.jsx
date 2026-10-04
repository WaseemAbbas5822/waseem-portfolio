export default function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((t) => <span key={t}>{t}</span>)}
    </div>
  );
}
