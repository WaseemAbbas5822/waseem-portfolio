import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data.js";
import Icon from "./Icon.jsx";

const GAP = 20;
const initials = (n) => n.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Testimonials() {
  const vpRef = useRef(null);
  const [vw, setVw] = useState(0);
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  const visible = vw >= 900 ? 4 : vw >= 600 ? 2 : 1;
  const cardW = vw ? (vw - GAP * (visible - 1)) / visible : 0;
  const step = cardW + GAP;
  const slides = total > visible;
  const items = slides ? [...TESTIMONIALS, ...TESTIMONIALS.slice(0, visible)] : TESTIMONIALS;

  useEffect(() => {
    const el = vpRef.current;
    const update = () => setVw(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!slides || paused) return;
    const t = setInterval(() => setIdx((i) => i + 1), 3000);
    return () => clearInterval(t);
  }, [slides, paused]);

  useEffect(() => {
    if (idx < total) return;
    const t1 = setTimeout(() => { setAnim(false); setIdx(0); }, 750);
    return () => clearTimeout(t1);
  }, [idx, total]);

  useEffect(() => {
    if (anim) return;
    const t = setTimeout(() => setAnim(true), 60);
    return () => clearTimeout(t);
  }, [anim]);

  useEffect(() => { setIdx(0); }, [visible]);

  return (
    <section id="testimonials">
      <div className="svc-head">
        <div className="eyebrow center"><i /> Client feedback <i /></div>
        <h2>What Clients <span>Say</span></h2>
        <p className="sub">Real feedback from people I have worked with.</p>
      </div>

      <div
        className="tvp"
        ref={vpRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="ttrack"
          style={{
            gap: GAP,
            transform: `translateX(-${idx * step}px)`,
            transition: anim ? "transform .7s ease" : "none",
          }}
        >
          {items.map((t, i) => (
            <article className="tcard" key={i} style={{ flex: `0 0 ${cardW || 240}px` }}>
              <div className="ttop">
                <Icon name="quote" size={26} />
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
              <p>{t.text}</p>
              <span className="tservice">{t.service}</span>
              <div className="twho">
                <span className="tavatar">{initials(t.name)}</span>
                <div>
                  <b>{t.name}</b>
                  <small>{t.role} · {t.country}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {slides && (
        <div className="tdots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show review ${i + 1}`}
              className={i === idx % total ? "on" : ""}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}