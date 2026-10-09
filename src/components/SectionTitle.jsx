/** Heading row for a section on the home page and inner pages. */
export default function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-head">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
