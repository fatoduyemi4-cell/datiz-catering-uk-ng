import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import GalleryClient from "./GalleryClient";
import { media } from "./media";
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-datiz-teal text-datiz-ivory">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-24">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-datiz-gold">Our Work</p>
        <h1 className="mb-14 text-center font-serif text-4xl text-datiz-gold md:text-6xl">Gallery</h1>
        {media.length === 0 ? (<p className="text-center text-datiz-ivory/70">Our gallery is coming soon.</p>) : (<GalleryClient />)}
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

