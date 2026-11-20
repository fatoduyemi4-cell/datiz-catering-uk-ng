import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import Socials from "@/components/Socials";
export const metadata = { title: "Event Planning Services | DATIŽ", description: "Full and partial event planning, on-the-day coordination, venue and supplier sourcing and event styling for weddings, birthdays, corporate events and more." };
const events = ["Weddings and pre-wedding celebrations including engagement parties and bridal showers", "Children’s and adults’ birthday parties", "Christenings, naming ceremonies and baby showers", "Anniversaries, graduations, retirement parties and family gatherings", "Destination parties and celebrations", "Corporate events including conferences, awards dinners and product launches", "Book launches", "Funerals, wakes and memorial gatherings"];
const help = [{ t: "Full event planning", d: "Planning and coordination from the first idea through to the day itself" }, { t: "Partial event planning", d: "Support with specific details when you’ve already started planning" }, { t: "On-the-day coordination", d: "Managing suppliers, setup and timings so you can focus on your guests" }, { t: "Venue and supplier sourcing", d: "Finding venues, caterers, florists and entertainment that suit your event and budget" }, { t: "Event styling", d: "Bringing together the theme, décor and layout" }];
const Orn = () => (<div className="mx-auto mt-6 flex items-center justify-center gap-4 text-datiz-gold"><span className="h-px w-16 bg-datiz-gold/60"></span><span className="text-xs">◆</span><span className="h-px w-16 bg-datiz-gold/60"></span></div>);
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-datiz-teal text-datiz-ivory">
      <Navbar />
      <RevealOnScroll />
      <section className="px-6 pb-24 pt-44 text-center" style={{ backgroundImage: "linear-gradient(rgba(8,43,30,0.82), rgba(8,43,30,0.94)), url(/services/decor.jpg)", backgroundSize: "cover", backgroundPosition: "center 35%" }}>
        <div className="mx-auto max-w-3xl">
          <h1 className="hero-rise font-serif text-5xl leading-tight text-datiz-ivory md:text-7xl">Event Planning <span className="italic text-datiz-gold">Services</span></h1>
          <div className="hero-rise hero-d1"><Orn /></div>
          <p className="hero-rise hero-d2 mx-auto mt-10 max-w-3xl font-serif text-xl italic leading-relaxed text-datiz-ivory/90 md:text-2xl">From family celebrations to corporate events, we can help you plan your event from start to finish or step in where you need support.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="reveal mb-14 text-center"><h2 className="font-serif text-4xl text-datiz-gold md:text-5xl">Events We Plan</h2><Orn /></div>
        <ul className="grid gap-x-16 md:grid-cols-2">
          {events.map((e, i) => (<li key={e} style={{ animationDelay: (i % 2) * 120 + "ms" }} className="reveal svc-row"><span className="svc-num">{String(i + 1).padStart(2, "0")}</span><span className="text-lg text-datiz-ivory/90">{e}</span></li>))}
        </ul>
      </section>
      <section className="border-y border-datiz-gold/15 bg-black/20 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="reveal mb-14 text-center"><h2 className="font-serif text-4xl text-datiz-gold md:text-5xl">How We Can Help</h2><Orn /></div>
          <div className="border-b border-datiz-gold/25">
            {help.map((h, i) => (<div key={h.t} className="reveal help-row"><div className="flex items-baseline gap-5"><span className="svc-num">{String(i + 1).padStart(2, "0")}</span><h3 className="font-serif text-2xl text-datiz-gold md:text-3xl">{h.t}</h3></div><p className="leading-relaxed text-datiz-ivory/80">{h.d}</p></div>))}
          </div>
        </div>
      </section>
      <section className="px-6 py-28">
        <div className="reveal cta-frame mx-auto max-w-3xl border border-datiz-gold/30 px-8 py-14 text-center">
          <p className="mb-10 font-serif text-2xl italic leading-relaxed text-datiz-ivory md:text-3xl">Get in touch to tell us about your event and the support you’re looking for.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
            <a href="https://wa.me/447738884720" target="_blank" rel="noopener noreferrer" className="btn-outline">Message on WhatsApp</a>
          </div>
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


