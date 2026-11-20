"use client";
import { useState } from "react";
const eventTypes = ["Wedding", "Birthday", "Corporate event", "Canapé reception", "Decoration only", "Other"];
const formatDate = (v: string) => { const d = v.replace(/\D/g, "").slice(0, 8); if (d.length > 4) return d.slice(0, 2) + "/" + d.slice(2, 4) + "/" + d.slice(4); if (d.length > 2) return d.slice(0, 2) + "/" + d.slice(2); return d; };
const validDate = (v: string) => { const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v); if (!m) return false; const dd = Number(m[1]); const mm = Number(m[2]); const yy = Number(m[3]); const dt = new Date(yy, mm - 1, dd); const today = new Date(); today.setHours(0, 0, 0, 0); return dt.getFullYear() === yy && dt.getMonth() === mm - 1 && dt.getDate() === dd && dt >= today; };
export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "baddate">("idle");
  const [eventDate, setEventDate] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validDate(eventDate)) { setStatus("baddate"); return; }
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      if (data.website) { setStatus("sent"); form.reset(); setEventDate(""); return; }
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...data, access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, subject: "New DATIŽ quote request: " + data.event_type + " - " + data.name, from_name: "DATIŽ Website" }) });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("Failed");
      setStatus("sent");
      form.reset();
      setEventDate("");
    } catch {
      setStatus("error");
    }
  }
  const field = "w-full rounded-md border border-datiz-gold/40 bg-transparent px-4 py-3 text-datiz-ivory placeholder:text-datiz-ivory/50 focus:border-datiz-gold focus:outline-none";
  return (
    <main className="min-h-screen bg-datiz-teal px-6 py-24 text-datiz-ivory">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl text-datiz-gold md:text-5xl">Request a Quote</h1>
        <p className="mt-4 text-datiz-ivory/80">Tell us about your event and we will get back to you. We ask for 2 to 3 weeks notice.</p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input name="name" required placeholder="Full name" className={field} />
          <input name="email" type="email" required placeholder="Email" className={field} />
          <div className="grid gap-5 md:grid-cols-2">
            <input name="phone" type="tel" required placeholder="Phone number" className={field} />
            <input name="whatsapp" type="tel" placeholder="WhatsApp number" className={field} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <select name="event_type" required defaultValue="" className={field}>
              <option value="" disabled className="text-black">Event type</option>
              {eventTypes.map((t) => (<option key={t} value={t} className="text-black">{t}</option>))}
            </select>
            <input name="event_date" type="text" required inputMode="numeric" autoComplete="off" maxLength={10} placeholder="Event date (DD/MM/YYYY)" value={eventDate} onChange={(e) => setEventDate(formatDate(e.target.value))} className={field} />
          </div>
          <input name="guest_count" type="number" min="1" required placeholder="Number of guests" className={field} />
          <textarea name="message" rows={5} placeholder="Tell us more about your event" className={field} />
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />
          <button type="submit" disabled={status === "sending"} className="btn-primary">{status === "sending" ? "Sending..." : "Send Enquiry"}</button>
          {status === "sent" && <p className="text-datiz-gold">Thank you. Your enquiry has been sent.</p>}
          {status === "baddate" && <p className="text-red-300">Please enter a valid date that is today or later, written as DD/MM/YYYY, for example 25/12/2026.</p>}
          {status === "error" && <p className="text-red-300">Something went wrong. Please message us on WhatsApp: +44 7738 884720.</p>}
        </form>
      </div>
    </main>
  );
}
