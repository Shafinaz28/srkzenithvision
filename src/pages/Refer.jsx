import { useState } from "react";
import { Link } from "react-router-dom";
import { referSteps } from "../data/content";
import Button from "../components/Button";
import Field from "../components/Field";
import FormSuccess from "../components/FormSuccess";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";
import { sendByEmail } from "../lib/mail";

const empty = { name: "", email: "", friendName: "", friendCompany: "", note: "" };

export default function Refer() {
  usePageTitle("Refer & Earn | SRK Zenithvision");
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    sendByEmail({
      subject: `Referral from ${form.name}`,
      body: `Your name: ${form.name}\nYour email: ${form.email}\nIntroduction: ${form.friendName}\nCompany: ${form.friendCompany}\n\n${form.note}`,
    });
    setSent(true);
  }

  return (
    <>
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Refer & Earn
          </p>
        }
        kicker="Introductions"
        title="Refer a company."
        accent="Earn the introduction."
        text="Introduce a company that should be working with us. If that introduction becomes a signed engagement, you receive 10% of the first-year fee."
      />

      <section className="section section-tight">
        <div className="wrap steps">
          {referSteps.map((step) => (
            <article className="step" key={step.n}>
              <span>{step.n}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap narrow">
          <p className="kicker">Make the introduction</p>
          <h2 className="block-title">Tell us who to meet.</h2>
          {sent ? (
            <FormSuccess
              title="Your email app should be open."
              text="Send the note and we will take it from there. We will tell you when the introduction becomes a conversation."
              onReset={() => {
                setSent(false);
                setForm(empty);
              }}
            />
          ) : (
            <form className="form-grid" onSubmit={onSubmit}>
              <Field label="Your name">
                <input name="name" value={form.name} onChange={update} autoComplete="name" required />
              </Field>
              <Field label="Your email">
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required />
              </Field>
              <Field label="Who should we meet">
                <input name="friendName" value={form.friendName} onChange={update} required />
              </Field>
              <Field label="Their company">
                <input name="friendCompany" value={form.friendCompany} onChange={update} required />
              </Field>
              <Field label="Why this conversation" full>
                <textarea name="note" value={form.note} onChange={update} required />
              </Field>
              <div className="field-full">
                <Button type="submit">Send the introduction</Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
