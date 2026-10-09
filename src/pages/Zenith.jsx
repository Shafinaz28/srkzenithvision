import { Link } from "react-router-dom";
import { faqs, tiers, zenithIncludes } from "../data/content";
import Button from "../components/Button";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

export default function Zenith() {
  usePageTitle("The Zenith | SRK Zenithvision");

  return (
    <>
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / The Zenith
          </p>
        }
        kicker="The private partnership"
        title="The Zenith"
        text="An annual seat for companies that want a category, not a campaign calendar. Few of these are open at once. That is the point."
      />

      <section className="section section-tight">
        <div className="wrap tier-grid">
          {tiers.map((tier) => (
            <article className={tier.featured ? "tier featured" : "tier"} key={tier.name}>
              <p className="kicker">{tier.badge}</p>
              <h2>{tier.name}</h2>
              <p className="price">{tier.price}</p>
              <p>{tier.text}</p>
              <ul className="points">
                {tier.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Button to={`/contact?service=${encodeURIComponent("The Zenith")}&message=${encodeURIComponent("I want to talk about the " + tier.name + " seat.")}`}>
                Request this seat
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap split">
          <div>
            <p className="kicker">Inside the Zenith seat</p>
            <h2 className="block-title">What the year actually contains.</h2>
          </div>
          <ul className="check-list">
            {zenithIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap narrow faq">
          <p className="kicker">Questions</p>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
