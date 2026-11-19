import RevealOnScroll from "@/components/RevealOnScroll";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const services = [{ n: "01", t: "Event Planning", d: "From the first idea to the final detail.", m: "/services/planning.jpg", v: false }, { n: "02", t: "Décor & Styling", d: "Settings that bring your vision to life.", m: "/services/decor.jpg", v: false }, { n: "03", t: "Catering", d: "Food prepared and served for your guests.", m: "/services/catering.jpg", v: false }, { n: "04", t: "Canapés", d: "Elegant bites for receptions and gatherings.", m: "/services/canapes.mp4", v: true }];
export default function Home() {
  return (
    <main className="min-h-screen bg-datiz-teal text-datiz-ivory">
      <Navbar />
      <RevealOnScroll />
      <section className="relative min-h-[max(100vh,840px)] bg-datiz-teal bg-cover md:min-h-[max(100vh,720px)]" style={{ backgroundImage: "linear-gradient(rgba(8,43,30,0.35), rgba(8,43,30,0.6)), url(/hero.jpg)", backgroundPosition: "55.5% 41%" }}>
        <div className="absolute left-[55.5%] top-[41%] -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="hero-rise hero-d1 mb-1 font-serif text-2xl italic text-datiz-teal md:text-4xl">Welcome to</p>
          <h1 className="hero-name hero-d2 text-5xl font-semibold uppercase tracking-[0.12em] text-datiz-gold-dark md:text-7xl">DATIŽ</h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 text-center md:pb-16">
          <div className="hero-line hero-d3 mx-auto mb-6 h-px w-24 bg-datiz-gold/70"></div>
          <p className="hero-rise hero-d4 mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-datiz-ivory/85 md:text-lg">Creating exceptional experiences across the United Kingdom, Nigeria, Europe and the Americas. From exquisite catering to beautifully curated settings, we take care of every detail so you can relax and savour the occasion.</p>
          <div className="hero-rise hero-d5 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
            <a href="https://wa.me/447738884720" target="_blank" rel="noopener noreferrer" className="btn-outline">Message on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="reveal border-y border-datiz-gold/20 bg-black/20 px-6 py-8">
        <div className="mx-auto grid max-w-5xl gap-6 text-center text-sm uppercase tracking-[0.2em] text-datiz-ivory/70 md:grid-cols-3">
          <p>United Kingdom • Nigeria • Europe • The Americas</p><p>Open 9:00 AM – 6:00 PM</p><p>2 to 3 weeks notice</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="reveal mb-14 text-center font-serif text-4xl text-datiz-gold md:text-5xl">What We Do</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (<div key={s.n} style={{ animationDelay: idx * 130 + "ms" }} className="reveal svc-card group overflow-hidden border border-datiz-gold/20"><div className="aspect-[4/3] w-full overflow-hidden bg-black/20">{s.v ? (<video src={s.m} autoPlay muted loop playsInline className="h-full w-full object-cover"></video>) : (<img src={s.m} alt={s.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />)}</div><div className="p-8"><p className="mb-4 font-serif text-3xl text-datiz-gold/60">{s.n}</p><h3 className="mb-3 font-serif text-2xl">{s.t}</h3><p className="text-sm leading-relaxed text-datiz-ivory/70">{s.d}</p></div></div>))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-datiz-gold">The Caterer</p>
          <h2 className="mb-6 font-serif text-4xl text-datiz-gold md:text-5xl">Meet Your Caterer</h2>
          <p className="mb-8 leading-relaxed text-datiz-ivory/70">Introduction text goes here.</p>
          <Link href="/quote" className="btn-outline">Request a Quote</Link>
        </div>
        <div className="reveal-zoom relative aspect-[4/5] w-full md:w-4/5 md:justify-self-end overflow-hidden border border-datiz-gold/30 bg-black/20">
          <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.2em] text-datiz-ivory/40">Caterer photo</div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/caterer.webp)" }}></div>
        </div>
      </section>
      <footer className="border-t border-datiz-gold/20 px-6 py-12 text-center">
        <p className="mb-2 font-serif text-3xl text-datiz-gold">DATIŽ</p>
        <p className="text-sm text-datiz-ivory/60">United Kingdom • Nigeria • Europe • The Americas | Open: 9:00 AM – 6:00 PM</p>
        <p className="mt-1 text-sm text-datiz-gold">+44 7738 884720</p>
        <Socials />
      </footer>
    </main>
  );
}










