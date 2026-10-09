import { Link } from "react-router-dom";
import { industries } from "../data/content";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

export default function Industries() {
  usePageTitle("Industries | SRK Zenithvision");

  return (
    <>
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Industries
          </p>
        }
        kicker="Markets"
        title="Industries"
        text="The craft is the same. The constraint changes. We learn the buyer, the rulebook, and the number that leadership already manages."
      />

      <section className="section section-tight">
        <div className="wrap industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.name}>
              <h2>{industry.name}</h2>
              <p>{industry.text}</p>
              <ul className="points">
                {industry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Button
                to={`/contact?service=${encodeURIComponent("Not sure yet")}&message=${encodeURIComponent("We want to talk about " + industry.name + ".")}`}
                variant="ghost"
                className="btn-small"
              >
                Talk about this market
              </Button>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Your market may not be on this list." text="If the offer is serious and the number is real, write anyway." />
    </>
  );
}
