import { useEffect, useRef, useState } from "react";
import { SKILLS } from "../data.js";
import Icon from "./Icon.jsx";

const SHORT = {
  "Understanding client requirements": "Client needs",
  "Team work in Microsoft Teams": "Teamwork",
};

function DTile({ item, delay }) {
  const [failed, setFailed] = useState(false);
  const showIcon = item.icon || failed;
  return (
    <div className="dtile" style={{ "--d": `${delay}s` }}>
      {showIcon ? (
        <Icon name={item.icon || "code"} size={22} />
      ) : (
        <img
          className={item.mono ? "mono" : ""}
          src={item.logo}
          alt=""
          width="24"
          height="24"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span>{SHORT[item.name] || item.name}</span>
    </div>
  );
}

export default function Skills() {
  const roomRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);

  // Open the door once, automatically, when the section scrolls into view
  useEffect(() => {
    const el = roomRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => { setOpen(true); setPinned(true); }, 500);
          io.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const next = !(open && pinned);
    setOpen(next);
    setPinned(next);
  };

  let n = 0;

  return (
    <section id="skills">
      <div className="svc-head">
        <div className="eyebrow center"><i /> Toolkit <i /></div>
        <h2>My <span>Skills</span></h2>
        <p className="sub">What I use day to day to build modern web applications.</p>
      </div>

      <div
        ref={roomRef}
        className={`droom${open ? " open" : ""}`}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-label="Skills door. Press to open or close."
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => { if (!pinned) setOpen(false); }}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
      >
        <div className="dframe">
          <div className="dglow" />
          <div className="dinner">
            {SKILLS.map((g) => (
              <div className="dgrp" key={g.group}>
                <h4>{g.group}</h4>
                <div className="dtiles">
                  {g.items.map((it) => {
                    n += 1;
                    return <DTile key={it.name} item={it} delay={0.35 + n * 0.045} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dleaf l"><i className="pn a" /><i className="pn b" /><i className="knob" /></div>
        <div className="dleaf r"><i className="pn a" /><i className="pn b" /><i className="knob" /></div>
        <div className="dsign">SKILLS</div>
      </div>

      <p className="dhint">
        <span className="h-hover">Hover over the door to open it</span>
        <span className="h-touch">Tap the door to open it</span>
      </p>
    </section>
  );
}