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
        title="Let's build"
        accent="something bold."
      />

      <section className="section contact-section">
        <div className="wrap">
          <div className="enquiry-card">
            <div className="enquiry-copy">
              <h2>Let's build something bold</h2>
              <p>Tell us what you want to grow. A senior strategist will reply with next steps, usually within one business day.</p>
              <div className="enquiry-meta">
                <div>
                  <span>Email</span>
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
                </div>
                <div>
                  <span>Address</span>
                  <p>{brand.address}</p>
                </div>
                <a
                  className="btn btn-whatsapp"
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

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
              <form className="form-grid enquiry-form" onSubmit={onSubmit}>
                <Field label="Your name">
                  <input name="name" value={form.name} onChange={update} autoComplete="name" required />
                </Field>
                <Field label="Work email">
                  <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" required />
                </Field>
                <Field label="Company">
                  <input name="company" value={form.company} onChange={update} autoComplete="organization" />
                </Field>
                <Field label="What do you need?">
                  <select name="service" value={form.service} onChange={update}>
                    {contactOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Tell us about your goals" full>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="What are you trying to achieve, and by when?"
                    required
                  />
                </Field>
                <div className="field-full">
                  <Button type="submit" icon="none">Send my enquiry</Button>
                  <p className="enquiry-note">Sending opens your email app with this message ready to send to our team.</p>
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
              src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
