/** Title block used at the top of every page except home. */
export default function PageHero({ crumb, kicker, title, accent, text }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        {crumb}
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>
          <span className="hero-line">
            <span>{title}</span>
          </span>
          {accent ? (
            <span className="hero-line">
              <span className="gradient-text">{accent}</span>
            </span>
          ) : null}
        </h1>
        {text ? <p className="deck">{text}</p> : null}
      </div>
    </header>
  );
}
