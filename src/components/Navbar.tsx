"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/menu", label: "Menu" }, { href: "/gallery", label: "Gallery" }];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) => "transition-colors duration-300 hover:text-datiz-gold " + (pathname === href ? "text-datiz-gold" : "text-datiz-ivory");
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-datiz-gold/20 bg-datiz-teal/95 backdrop-blur">
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-6 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-datiz-gold font-serif text-xl text-datiz-gold">D</span>
          <span className="font-serif text-2xl tracking-wide text-datiz-gold">DATIŽ</span>
        </Link>
        <ul className="hidden items-center gap-10 text-sm uppercase tracking-widest lg:flex">
          {links.map((l) => (<li key={l.href}><Link href={l.href} className={linkClass(l.href)}>{l.label}</Link></li>))}
        </ul>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="justify-self-end text-3xl text-datiz-gold lg:hidden">{open ? "×" : "☰"}</button>
      </nav>
      {open && (<ul className="flex flex-col gap-5 border-t border-datiz-gold/20 px-6 py-6 text-sm uppercase tracking-widest lg:hidden">
        {links.map((l) => (<li key={l.href}><Link href={l.href} onClick={() => setOpen(false)} className={linkClass(l.href)}>{l.label}</Link></li>))}
      </ul>)}
    </header>
  );
}
