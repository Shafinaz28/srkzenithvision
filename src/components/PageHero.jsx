/** Title block used at the top of every page except home. */
export default function PageHero({ crumb, kicker, title, text }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        {crumb}
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>
          <span className="hero-line">
            <span>{title}</span>
          </span>
        </h1>
        {text ? <p className="deck">{text}</p> : null}
      </div>
    </header>
  );
}
