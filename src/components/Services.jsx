import { PROFILE, SERVICES } from "../data.js";
import Icon from "./Icon.jsx";

const waLink = (text) => `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="svc-head">
        <div className="eyebrow center"><i /> What I offer <i /></div>
        <h2>Servi<span>ces</span></h2>
        <p className="sub">Pick a service and send your order on WhatsApp. I reply with a quote and timeline.</p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <article className="svc" key={s.title}>
            <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="svc-top">
              <span className="svc-ico" style={s.tint ? { color: s.tint } : undefined}>
                {s.logo ? <img src={s.logo} alt="" width="30" height="30" /> : <Icon name={s.icon} size={28} />}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
            <a
              className="btn"
              href={waLink(`Hi Waseem, I want to order: ${s.title}. Here are my project details: `)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order this service <Icon name="arrow" size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}