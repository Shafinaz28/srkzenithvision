import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found | SRK Zenithvision");

  return (
    <section className="not-found">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>
          <span className="hero-line">
            <span>This page</span>
          </span>
          <span className="hero-line">
            <span className="gradient-text">is not on the map.</span>
          </span>
        </h1>
        <p className="deck">The link may be old. The work is still here.</p>
        <Button to="/">Back to home</Button>
      </div>
    </section>
  );
}
