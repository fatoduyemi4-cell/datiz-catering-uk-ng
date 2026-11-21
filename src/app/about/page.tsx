import Link from "next/link";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import Socials from "@/components/Socials";
export const metadata = { title: "About DATIŽ", description: "DATIŽ brings event planning, décor, styling and catering together across the United Kingdom, Nigeria, Europe and the Americas." };
const Orn = () => (<div className="mx-auto mt-6 flex items-center justify-center gap-4 text-datiz-gold"><span className="h-px w-16 bg-datiz-gold/60"></span><span className="text-xs">◆</span><span className="h-px w-16 bg-datiz-gold/60"></span></div>);
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-datiz-teal text-datiz-ivory">
      <Navbar />
      <RevealOnScroll />
      <section className="px-6 pb-20 pt-44 text-center" style={{ backgroundImage: "radial-gradient(ellipse at top, rgba(200,169,110,0.16), transparent 65%)" }}>
        <h1 className="hero-rise font-serif text-5xl text-datiz-ivory md:text-7xl">About <span className="italic text-datiz-gold">DATIŽ</span></h1>
        <div className="hero-rise hero-d1"><Orn /></div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <p className="reveal text-center font-serif text-2xl italic leading-relaxed text-datiz-ivory md:text-3xl">At DATIŽ, we bring event planning, décor, styling and catering together so you can spend more time with your guests and enjoy the occasion.</p>
        <span className="reveal mx-auto my-14 block h-px w-24 bg-datiz-gold/50"></span>
        <p className="reveal mb-8 text-lg leading-loose text-datiz-ivory/85">We start by getting to know what you’re celebrating and how you want it to feel. From there, we bring the details together, from the look of the room to what’s on the menu. Whether you’re planning a reception with canapés or a celebration with a full meal, we’ll help you create an occasion that feels like yours.</p>
        <p className="reveal text-lg leading-loose text-datiz-ivory/85">We work across the United Kingdom, Nigeria, Europe and the Americas. Tell us what you have in mind, and we’ll help you bring it to life.</p>
      </section>
      <section className="px-6 pb-28">
        <div className="reveal cta-frame mx-auto max-w-3xl border border-datiz-gold/30 px-8 py-12">
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

