import { socials } from "@/lib/socials";
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-5 w-5" };
const icons: Record<string, React.ReactNode> = {
  Instagram: (<svg {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg>),
  Facebook: (<svg {...base}><path d="M14.5 21v-8h2.7l.5-3.3h-3.2V7.6c0-1 .4-1.7 1.8-1.7h1.5V3.1c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.2v2.5H8.3V13h2.5v8z" fill="currentColor" stroke="none" /></svg>),
  TikTok: (<svg {...base}><path d="M14 3v11.2a3.6 3.6 0 1 1-3.6-3.6" /><path d="M14 3c.3 2.6 2 4.3 4.6 4.5" /></svg>),
  WhatsApp: (<svg {...base}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path transform="translate(7.2 6.8) scale(0.4)" strokeWidth="2.2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
};
export default function Socials() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      {socials.map((s) => (<a key={s.name} href={s.url || "#"} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name} className="flex h-11 w-11 items-center justify-center rounded-full border border-datiz-gold/50 text-datiz-gold transition-colors duration-300 hover:bg-datiz-gold hover:text-datiz-teal">{icons[s.name]}</a>))}
    </div>
  );
}
