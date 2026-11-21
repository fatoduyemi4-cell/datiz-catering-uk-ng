import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/600-italic.css";
import "@fontsource/caveat/600.css";
export const metadata = { robots: { index: false } };
const options = [{ name: "1. Playfair Display italic", cls: "f-playfair italic" }, { name: "2. Cormorant Garamond italic", cls: "f-cormorant italic" }, { name: "3. Lora italic", cls: "f-lora italic" }, { name: "4. Caveat (handwritten signature)", cls: "f-caveat" }];
export default function FontTest() {
  return (
    <main className="min-h-screen bg-datiz-teal px-6 py-20 text-datiz-ivory">
      <div className="mx-auto max-w-3xl space-y-16">
        {options.map((o) => (<div key={o.name}><p className="mb-4 text-xs uppercase tracking-[0.3em] text-datiz-gold/70">{o.name}</p><div className={o.cls}><h2 className="mb-4 text-4xl font-semibold text-datiz-gold md:text-6xl">Meet Toyin, your event planner</h2><p className="text-xl leading-relaxed text-datiz-ivory/85">I’m Toyin, the founder of DATIŽ. My love for planning events started when I was young, helping to organise family parties. I loved bringing everyone together and seeing them enjoy something I’d helped put together.</p></div></div>))}
      </div>
    </main>
  );
}

