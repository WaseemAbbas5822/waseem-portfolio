import { useState } from "react";
import { EXPERIENCE, EDUCATION } from "../data.js";
import Icon from "./Icon.jsx";

function TechLogo({ t }) {
  const [failed, setFailed] = useState(false);
  return (
    <div>
      {failed ? (
        <Icon name="users" size={26} />
      ) : (
        <img className={t.mono ? "mono" : ""} src={t.logo} alt="" width="26" height="26" loading="lazy" onError={() => setFailed(true)} />
      )}
      <span>{t.name}</span>
    </div>
  );
}

function Badge({ children }) {
  return <span className="jbadge"><Icon name="calendar" size={13} /> {children}</span>;
}

function Head({ icon, title, text }) {
  return (
    <div className="jhead">
      <span className="jico"><Icon name={icon} size={30} /></span>
      <div>
        <h3>{title}<i /></h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ExpCard({ e }) {
  return (
    <article className="jcard exp">
      <span className="jlogo">{e.letter ? <b>{e.letter}</b> : <Icon name={e.icon} size={34} />}</span>
      <div className="jbody">
        <Badge>{e.when}</Badge>
        <h4>{e.title}</h4>
        {e.org && <div className="jorg">{e.org}</div>}
        <p>{e.text}</p>
      </div>
      <div className="jtech">
        {e.tech.map((t) => <TechLogo key={t.name} t={t} />)}
      </div>
      <span className="jgo"><Icon name="arrow" size={14} /></span>
    </article>
  );
}

function EduCard({ e }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="jcard edu">
      <div className="jbody">
        <Badge>{e.when}</Badge>
        <h4>{e.title}</h4>
        <div className="jorg">{e.org}</div>
        <p>{e.text}</p>
      </div>
      {e.logo && !failed ? (
        <img className="jlogoimg" src={e.logo} alt={e.org} onError={() => setFailed(true)} />
      ) : (
        <span className="jart"><Icon name={e.art} size={56} /></span>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="svc-head">
        <div className="eyebrow center"><i /> My Journey <i /></div>
        <h2>Experience &amp; <span>Education</span></h2>
        <p className="sub">Practical experience. Strong foundation. Aiming higher.</p>
      </div>
      <div className="journey">
        <div>
          <Head icon="briefcase" title="Experience" text="Real projects. Practical skills. Growing every day." />
          <div className="jlist">{EXPERIENCE.map((e) => <ExpCard key={e.title} e={e} />)}</div>
        </div>
        <div>
          <Head icon="cap" title="Education" text="Building a strong foundation for a better future." />
          <div className="jlist">{EDUCATION.map((e) => <EduCard key={e.title} e={e} />)}</div>
        </div>
      </div>
    </section>
  );
}