"use client";
import { useState } from "react";
import { media } from "./media";
const PER_PAGE = 8;
const pill = "rounded-full border border-datiz-gold/50 px-5 py-2 text-sm uppercase tracking-widest text-datiz-gold transition-colors hover:bg-datiz-gold hover:text-datiz-teal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-datiz-gold";
export default function GalleryClient() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const pages = Math.max(1, Math.ceil(media.length / PER_PAGE));
  const start = page * PER_PAGE;
  const visible = media.slice(start, start + PER_PAGE);
  const step = (d: number) => { if (open !== null) setOpen((open + d + media.length) % media.length); };
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((m, i) => (
          <button key={m.src} onClick={() => setOpen(start + i)} className="group relative aspect-square overflow-hidden border border-datiz-gold/20 bg-black/30 transition-colors hover:border-datiz-gold">
            {m.type === "video" ? (<video src={m.src} muted playsInline preload="metadata" className="h-full w-full object-cover"></video>) : (<img src={m.src} alt="DATIŽ event" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />)}
            {m.type === "video" && (<span className="absolute inset-0 flex items-center justify-center bg-black/30 text-4xl text-datiz-ivory">▶</span>)}
          </button>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <button onClick={() => setPage(page - 1)} disabled={page === 0} className={pill}>Prev</button>
        {Array.from({ length: pages }, (_, n) => (<button key={n} onClick={() => setPage(n)} className={"h-10 w-10 rounded-full border text-sm transition-colors " + (n === page ? "border-datiz-gold bg-datiz-gold text-datiz-teal" : "border-datiz-gold/50 text-datiz-gold hover:bg-datiz-gold/20")}>{n + 1}</button>))}
        <button onClick={() => setPage(page + 1)} disabled={page >= pages - 1} className={pill}>Next</button>
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-5 top-4 text-4xl text-datiz-gold">×</button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 text-5xl text-datiz-gold md:left-8">‹</button>
          <div onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl">
            {media[open].type === "video" ? (<video key={media[open].src} src={media[open].src} controls autoPlay playsInline className="max-h-[85vh] max-w-full"></video>) : (<img src={media[open].src} alt="DATIŽ event" className="max-h-[85vh] max-w-full object-contain" />)}
          </div>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 text-5xl text-datiz-gold md:right-8">›</button>
        </div>
      )}
    </div>
  );
}
