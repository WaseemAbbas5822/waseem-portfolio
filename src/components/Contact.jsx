import { useState } from "react";
import { PROFILE, SOCIALS, SERVICES } from "../data.js";
import Icon from "./Icon.jsx";

const SOCIAL_ICON = { github: "github", linkedin: "linkedin", facebook: "facebook" };
const wa = (text) => `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;

function InfoCard({ icon, label, value, href, featured, external }) {
  const body = (
    <>
      <span className="cico"><Icon name={icon} size={22} /></span>
      <div className="ctext">
        <small>{label}</small>
        <b>{value}</b>
      </div>
      {featured && <Icon name="arrow" size={20} />}
    </>
  );
  const cls = `ccard${featured ? " featured" : ""}`;
  return href ? (
    <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{body}</a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: SERVICES[0].title, msg: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Hi Waseem, I am ${form.name} (${form.email}).\n` +
      `Service: ${form.service}\n` +
      `${form.msg}`;
    window.open(wa(text), "_blank", "noopener");
  };

  return (
    <section id="contact">
      <div className="svc-head">
        <div className="eyebrow center"><i /> Get in touch <i /></div>
        <h2>Let&apos;s Work <span>Together</span></h2>
        <p className="sub">Have a project or a bug that needs fixing? Send me a message.</p>
      </div>

      <div className="cgrid">
        <div className="cinfo">
          <div className="cstatus"><span className="dot" /> Open for new projects</div>
          <InfoCard featured external icon="whatsapp" label="WhatsApp" value="Chat with me directly" href={`https://wa.me/${PROFILE.whatsapp}`} />
          <InfoCard icon="phone" label="Phone" value={PROFILE.phone} href={`tel:+${PROFILE.whatsapp}`} />
          <InfoCard icon="mail" label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
          <InfoCard icon="pin" label="Location" value={PROFILE.location} />
          <div className="csocial">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon name={SOCIAL_ICON[s.name.toLowerCase()] || "arrow"} size={22} />
              </a>
            ))}
          </div>
        </div>

        <form className="cform" onSubmit={submit}>
          <h3>Send me a message</h3>
          <div className="cpair">
            <label>Your name
              <input name="name" value={form.name} onChange={change} placeholder="enter your name" required autoComplete="name" />
            </label>
            <label>Your email
              <input name="email" type="email" value={form.email} onChange={change} placeholder="enter your email" required autoComplete="email" />
            </label>
          </div>
          <label>Service
            <span className="cselect">
              <select name="service" value={form.service} onChange={change}>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Something else">Something else</option>
              </select>
              <Icon name="chevron" size={18} />
            </span>
          </label>
          <label className="grow">Project details
            <textarea name="msg" value={form.msg} onChange={change} placeholder="Tell me about your project, timeline and any links..." required />
          </label>
          <button className="btn" type="submit"><Icon name="whatsapp" size={18} /> Send on WhatsApp <Icon name="arrow" size={16} /></button>
          <small className="cnote">Your message opens in WhatsApp, ready to send.</small>
        </form>
      </div>
    </section>
  );
}