"use client";
import { useEffect, useState } from "react";
import { media } from "./media";
const PER_PAGE = 6;
const pill = "rounded-full border border-datiz-gold/50 px-5 py-2 text-sm uppercase tracking-widest text-datiz-gold transition-colors hover:bg-datiz-gold hover:text-datiz-teal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-datiz-gold";
export default function GalleryClient() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const pages = Math.max(1, Math.ceil(media.length / PER_PAGE));
  const start = page * PER_PAGE;
  const visible = media.slice(start, start + PER_PAGE);
  const step = (d: number) => { if (open !== null) setOpen((open + d + media.length) % media.length); };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (open === null) return; if (e.key === "Escape") setOpen(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  const enter = (e: React.MouseEvent<HTMLDivElement>) => { const v = e.currentTarget.querySelector("video"); if (v) v.play().catch(() => {}); };
  const leave = (e: React.MouseEvent<HTMLDivElement>) => { const v = e.currentTarget.querySelector("video"); if (v) { v.pause(); v.currentTime = 0; } };
  return (
    <div>
      <div key={page} className="film-grid grid grid-cols-2 gap-6 lg:grid-cols-3">
        {visible.map((m, i) => (
          <div key={m.src} className="film-tile" style={{ animationDelay: i * 120 + "ms" }} onMouseEnter={enter} onMouseLeave={leave}>
            <button onClick={() => setOpen(start + i)} className="film-card" aria-label={m.type === "video" ? "Play video" : "View photo"}>
              <span className="film-media">
                {m.type === "video" ? (<video src={m.src} muted loop playsInline preload="metadata"></video>) : (<img src={m.src} alt="DATIŽ event" loading="lazy" className="film-ken" style={{ animationDuration: 9 + (i % 3) * 2 + "s" }} />)}
              </span>
              <span className="film-vignette"></span>
              {m.type === "video" && (<span className="film-play"><span>▶</span></span>)}
              <span className="film-bar film-bar-top"></span>
              <span className="film-bar film-bar-bottom"><span className="film-label">{m.type === "video" ? "Watch" : "View"}</span></span>
              <span className="film-sweep"></span>
              <span className="film-corner tl"></span><span className="film-corner tr"></span><span className="film-corner bl"></span><span className="film-corner br"></span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <button onClick={() => setPage(page - 1)} disabled={page === 0} className={pill}>Prev</button>
        {Array.from({ length: pages }, (_, n) => (<button key={n} onClick={() => setPage(n)} className={"h-10 w-10 rounded-full border text-sm transition-colors " + (n === page ? "border-datiz-gold bg-datiz-gold text-datiz-teal" : "border-datiz-gold/50 text-datiz-gold hover:bg-datiz-gold/20")}>{n + 1}</button>))}
        <button onClick={() => setPage(page + 1)} disabled={page >= pages - 1} className={pill}>Next</button>
      </div>
      {open !== null && (
        <div className="film-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-5 top-4 text-4xl text-datiz-gold">×</button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 text-5xl text-datiz-gold md:left-8">‹</button>
          <div key={open} onClick={(e) => e.stopPropagation()} className="film-pop max-h-full max-w-5xl">
            {media[open].type === "video" ? (<video src={media[open].src} controls autoPlay playsInline className="max-h-[80vh] max-w-full"></video>) : (<img src={media[open].src} alt="DATIŽ event" className="max-h-[80vh] max-w-full object-contain" />)}
          </div>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 text-5xl text-datiz-gold md:right-8">›</button>
          <p className="absolute bottom-4 text-sm tracking-widest text-datiz-ivory/70">{open + 1} / {media.length}</p>
        </div>
      )}
    </div>
  );
}
