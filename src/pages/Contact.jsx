import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { brand, contactOptions } from "../data/content";
import Button from "../components/Button";
import Field from "../components/Field";
import FormSuccess from "../components/FormSuccess";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";
import { sendByEmail } from "../lib/mail";

const empty = {
  name: "",
  email: "",
  company: "",
  service: contactOptions[0],
  message: "",
};

export default function Contact() {
  usePageTitle("Contact | SRK Zenithvision");
  const [params] = useSearchParams();
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const service = params.get("service");
    const message = params.get("message");
    setForm((current) => ({
      ...current,
      service: service && contactOptions.includes(service) ? service : current.service,
      message: message || current.message,
    }));
  }, [params]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    sendByEmail({
      subject: `Enquiry from ${form.name} — ${form.service}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\nInterest: ${form.service}\n\n${form.message}`,
    });
    setSent(true);
  }

  return (
    <div className="contact-page">
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Contact
          </p>
        }
        kicker="Start"
        title="Contact"
      />

      <section className="section contact-section">
        <div className="wrap contact-board">
          <aside className="contact-panel contact-aside">
            <p className="kicker">Information</p>
            <a className="big-link" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            <p>Working across 18+ markets. We reply within one business day.</p>
            <p className="contact-address">
              Zenith Apex Tower, Financial District
              <br />
              One Vanguard Plaza, Level 48
            </p>
            <p>
              Looking for the private seat? Read <Link to="/the-zenith">The Zenith</Link>.
            </p>
          </aside>

          <div className="contact-panel">
            <p className="kicker">Form</p>
            {sent ? (
              <FormSuccess
                title="Your email app should be open."
                text="The note is addressed and ready to send. If nothing opened, use the email address beside this box."
                onReset={() => {
                  setSent(false);
                  setForm(empty);
                }}
              />
            ) : (
              <form className="form-grid" onSubmit={onSubmit}>
                <Field label="Name">
                  <input name="name" value={form.name} onChange={update} autoComplete="name" required />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required />
                </Field>
                <Field label="Company">
                  <input name="company" value={form.company} onChange={update} autoComplete="organization" />
                </Field>
                <Field label="Interest">
                  <select name="service" value={form.service} onChange={update}>
                    {contactOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field label="The number that has to move" full>
                  <textarea name="message" value={form.message} onChange={update} required />
                </Field>
                <div className="field-full">
                  <Button type="submit">Send the note</Button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="wrap contact-map-block">
          <p className="kicker">Google Map</p>
          <div className="contact-map">
            <iframe
              title="SRK Zenithvision office on Google Maps"
              src="https://maps.google.com/maps?q=One%20Vanguard%20Plaza%20Financial%20District&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
