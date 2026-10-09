import { closing } from "../data/content";
import Button from "./Button";

export default function CtaBand({ title = closing.title, text = closing.text, to = "/contact", label = "Let's build something bold" }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button to={to}>{label}</Button>
      </div>
    </section>
  );
}
