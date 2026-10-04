import { useState } from "react";
import { PROFILE } from "../data.js";
import Icon from "./Icon.jsx";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="eyebrow"><i /> {PROFILE.eyebrow}</div>
        <h1>{PROFILE.first} <span>{PROFILE.last}</span></h1>
        <div className="role">
          {PROFILE.role} <em>·</em>
          <span className="loc"><Icon name="pin" size={18} /> {PROFILE.location}</span>
        </div>
        <p>{PROFILE.intro}</p>
        <div className="cta">
          <a className="btn" href="#services"><Icon name="user" /> Hire me <Icon name="arrow" size={16} /></a>
          <a className="btn alt" href="#projects"><Icon name="eye" /> See my work</a>
          <a className="btn alt" href="/resume.pdf" download><Icon name="download" /> Download resume</a>
        </div>
        <div className="facts">
          {PROFILE.facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fbox"><Icon name={f.icon} size={22} /></span>
              <div><b>{f.value}</b><span>{f.label}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="photo-wrap">
        <div className="dots" aria-hidden="true" />
        <div className="ring" aria-hidden="true" />
        <div className="photo">
          {photoFailed ? (
            <div className="ph" aria-hidden="true">WA</div>
          ) : (
            <img src="/photo.jpg" alt={PROFILE.name} onError={() => setPhotoFailed(true)} />
          )}
          <div className="tag"><span className="dot" /> Open for projects</div>
        </div>
      </div>
    </div>
  );
}
