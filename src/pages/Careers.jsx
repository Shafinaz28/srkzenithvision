import { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../data/content";
import Field from "../components/Field";
import FormSuccess from "../components/FormSuccess";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import usePageTitle from "../hooks/usePageTitle";
import { sendByEmail } from "../lib/mail";

const empty = { name: "", email: "", role: jobs[0].title, link: "", note: "" };

export default function Careers() {
  usePageTitle("Careers | SRK Zenithvision");
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function chooseRole(role) {
    setForm((current) => ({ ...current, role }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  function onSubmit(event) {
    event.preventDefault();
    sendByEmail({
      subject: `Career note: ${form.role} — ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nWork: ${form.link}\n\n${form.note}`,
    });
    setSent(true);
  }

  return (
    <div className="careers-page">
      <PageHero
        crumb={
          <p className="crumb">
            <Link to="/">Home</Link> / Careers
          </p>
        }
        kicker="Join"
        title="Come build"
        accent="what comes next."
      />

      <section className="careers-roles">
        <div className="wrap careers-list">
          {jobs.map((job) => (
            <article className="job" key={job.title}>
              <div>
                <h2>{job.title}</h2>
                <p>{job.summary}</p>
              </div>
              <p className="meta">
                {job.where}
                <br />
                {job.type}
              </p>
              <Button icon="none" className="btn-small" onClick={() => chooseRole(job.title)}>
                Apply
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-apply" id="apply">
        <div className="wrap narrow">
          <p className="kicker">Apply</p>
          <h2 className="block-title">Send a note.</h2>
          {sent ? (
            <FormSuccess
              title="Your email app should be open."
              text="If it did not open, write to us and mention the role. We read every note."
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
              <Field label="Role" full>
                <select name="role" value={form.role} onChange={update}>
                  {jobs.map((job) => (
                    <option key={job.title}>{job.title}</option>
                  ))}
                </select>
              </Field>
              <Field label="A link to your work" full>
                <input name="link" value={form.link} onChange={update} placeholder="Site, deck, or writing" required />
              </Field>
              <Field label="Why this seat" full>
                <textarea name="note" value={form.note} onChange={update} required />
              </Field>
              <div className="field-full">
                <Button type="submit">Send the note</Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
