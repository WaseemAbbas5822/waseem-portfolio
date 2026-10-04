import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data.js";
import Chips from "./Chips.jsx";

// Entrance direction per card: first from the left, second from the top, third from the right
const FROM = ["fl", "ft", "fr"];

export default function Projects() {
  const gridRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setShow(true); io.disconnect(); }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="sub">Things I have built. New projects are added as they are finished.</p>
      <div className={`grid${show ? " show" : ""}`} ref={gridRef}>
        {PROJECTS.map((p, i) => (
          <article
            className={`card pcard enter ${FROM[i % 3]} ${p.image ? "has-img" : ""}`}
            key={p.title}
            style={{
              ...(p.image ? { backgroundImage: `url(${p.image})` } : {}),
              "--delay": `${(i % 3) * 0.15}s`,
            }}
          >
            <div className="pbody">
              <span className={`badge ${p.status === "wip" ? "wip" : "done"}`}>
                {p.status === "wip" ? "In progress" : "Completed"}
              </span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Chips items={p.tech} />
              <div className="plinks">
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live site</a>}
                {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Code</a>}
              </div>
            </div>
          </article>
        ))}
        <article className="card slot enter fb" style={{ "--delay": "0.45s" }}>
          <h3>Next project</h3>
          <p>Currently building. It will appear here when it is done.</p>
        </article>
      </div>
    </section>
  );
}