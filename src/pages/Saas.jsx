import { Link } from "react-router-dom";
import { products } from "../data/content";
import Button from "../components/Button";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

export default function Saas() {
  usePageTitle("SaaS Products | SRK Zenithvision");

  return (
    <>
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / SaaS Products
          </p>
        }
        kicker="Software"
        title="Software built"
        accent="to stay."
        text="Four products we run beside the marketing work. They keep signal, creative, lifecycle, and reporting in one place after the workshop is over."
      />

      <section className="section section-tight">
        <div className="wrap product-grid large">
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <p className="kicker">{product.line}</p>
              <h2>{product.name}</h2>
              <p>{product.text}</p>
              <ul className="points">
                {product.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Button to={`/contact?service=${encodeURIComponent("Not sure yet")}&message=${encodeURIComponent("I want to talk about " + product.name + ".")}`} variant="ghost" className="btn-small">
                Ask about {product.name}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="The products sit inside the engagement."
        text="You can ask about a tool on its own. Most clients meet them because the marketing work needed a place to live."
        to="/the-zenith"
        label="See The Zenith"
      />
    </>
  );
}
