import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/600-italic.css";
import "@fontsource/caveat/600.css";
const fonts = { playfair: "f-playfair", cormorant: "f-cormorant", lora: "f-lora", caveat: "f-caveat" };
export default function AboutToyin() {
  // Swap these two between: fonts.playfair, fonts.cormorant, fonts.lora, fonts.caveat (caveat suits the heading only)
  const headingFont = fonts.lora;
  const bodyFont = fonts.lora;
  const headingStyle = headingFont === fonts.caveat ? "" : " italic";
  return (
    <div className="mb-10">
      <h2 className={headingFont + headingStyle + " reveal text-4xl font-semibold leading-tight text-datiz-gold md:text-6xl"}>Meet Toyin, your event planner</h2>
      <span className="reveal mb-6 mt-6 block h-px w-16 bg-datiz-gold/70" style={{ animationDelay: "150ms" }}></span>
      <p className={bodyFont + " reveal mb-5 text-xl italic leading-relaxed text-datiz-ivory/85"} style={{ animationDelay: "250ms" }}>I’m Toyin, the founder of DATIŽ. My love for planning events started when I was young, helping to organise family parties. I loved bringing everyone together and seeing them enjoy something I’d helped put together. What began with family celebrations grew into a passion and eventually became DATIŽ.</p>
      <p className={bodyFont + " reveal text-xl italic leading-relaxed text-datiz-ivory/85"} style={{ animationDelay: "400ms" }}>Today, I bring that same care to every event I plan. I love hearing what you have in mind and bringing the details together, from how the room looks to what’s on the menu. My favourite part is seeing you relax and enjoy the celebration with the people you brought together.</p>
    </div>
  );
}


