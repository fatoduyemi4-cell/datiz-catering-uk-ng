"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/gallery", label: "Gallery" }];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) => "transition-colors duration-300 hover:text-datiz-gold " + (pathname === href ? "text-datiz-gold" : "text-datiz-ivory");
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      {open && (<button aria-label="Close menu" onClick={() => setOpen(false)} className="fixed inset-0 z-40 cursor-default bg-black/30 lg:hidden"></button>)}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-datiz-gold/20 bg-datiz-teal/95 backdrop-blur">
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-6 py-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-datiz-gold font-serif text-xl text-datiz-gold">D</span>
            <span className="font-serif text-2xl tracking-wide text-datiz-gold">DATIŽ</span>
          </Link>
          <ul className="hidden items-center gap-10 text-sm uppercase tracking-widest lg:flex">
            {links.map((l) => (<li key={l.href}><Link href={l.href} className={linkClass(l.href)}>{l.label}</Link></li>))}
          </ul>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="justify-self-end text-3xl text-datiz-gold lg:hidden">{open ? "×" : "☰"}</button>
        </nav>
        {open && (<ul className="menu-drop absolute right-0 top-full flex w-2/5 min-w-[12rem] flex-col gap-5 border-b border-l border-datiz-gold/20 bg-datiz-teal px-6 py-6 text-sm uppercase tracking-widest lg:hidden">
          {links.map((l) => (<li key={l.href}><Link href={l.href} onClick={() => setOpen(false)} className={linkClass(l.href)}>{l.label}</Link></li>))}
        </ul>)}
      </header>
    </>
  );
}


