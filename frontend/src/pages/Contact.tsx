import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT, IMG } from '../data/site';
import { Img } from '../components/Img';
import { Eyebrow, Section } from '../components/Section';

const TOPICS = ['General enquiry', 'Clean Energy Marketplace', 'Becoming a supplier', 'Intelligent Pilot', 'Smart Cities & Companies', 'Distribution partnership'];

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: TOPICS[0], message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = params.get('topic');
    if (t) {
      const match = TOPICS.find((x) => x.toLowerCase().startsWith(t.toLowerCase().split(' ')[0]));
      setForm((f) => ({ ...f, topic: match ?? f.topic }));
    }
  }, [params]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${form.topic}: ${form.name}${form.company ? ` (${form.company})` : ''}`;
    const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '-'}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = 'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent';

  return (
    <>
      <section className="bg-white pt-8 pb-10 sm:pt-12 lg:pt-14 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-5">
            <Eyebrow>Contact us</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold uppercase tracking-tight leading-[0.98] text-ink text-balance">Let’s talk about your energy future</h1>
            <p className="text-lg sm:text-xl text-body max-w-2xl">Whether you’re a home owner, a business, a city, a supplier or a distributor, get in touch and our team will come back to you.</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <a href={`mailto:${CONTACT.email}`} className="rounded-2xl border border-neutral-200 p-5 flex items-center gap-4 hover:border-accent transition-colors">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-accent" /></span>
              <span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Email</span><span className="font-semibold text-ink break-all">{CONTACT.email}</span></span>
            </a>
            <div className="rounded-2xl border border-neutral-200 p-5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-accent" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Location</span><span className="font-semibold text-ink">{CONTACT.location}</span></span>
            </div>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <form onSubmit={submit} className="lg:col-span-7 rounded-[28px] bg-white border border-neutral-200 p-6 sm:p-10 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Send us a message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5 block"><span className="text-sm font-semibold text-ink">Name *</span><input required value={form.name} onChange={set('name')} className={field} placeholder="Your name" /></label>
              <label className="space-y-1.5 block"><span className="text-sm font-semibold text-ink">Email *</span><input required type="email" value={form.email} onChange={set('email')} className={field} placeholder="you@company.com" /></label>
              <label className="space-y-1.5 block"><span className="text-sm font-semibold text-ink">Company</span><input value={form.company} onChange={set('company')} className={field} placeholder="Company or organisation" /></label>
              <label className="space-y-1.5 block"><span className="text-sm font-semibold text-ink">Topic</span>
                <select value={form.topic} onChange={set('topic')} className={field}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select>
              </label>
            </div>
            <label className="space-y-1.5 block"><span className="text-sm font-semibold text-ink">Message *</span><textarea required rows={6} value={form.message} onChange={set('message')} className={field} placeholder="Tell us about your homes, sites, fleet, city or product range…" /></label>
            <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors cursor-pointer">Send message <Send className="w-4 h-4" /></button>
            {sent && <p className="text-sm text-accent-dark" role="status">Your email app should now open with your message. If it doesn’t, email us at {CONTACT.email}.</p>}
          </form>
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-100"><Img src={IMG.communitySolar} alt="A woman using the Davwo app on a solar farm" /></div>
            <div className="rounded-[28px] bg-forest text-white p-7 space-y-3">
              <h3 className="font-display text-xl font-bold">Already know what you need?</h3>
              <p className="text-sm text-white/75">Browse the marketplace or register as a supplier directly on the Davwo platform.</p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a href={CONTACT.marketplaceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-forest text-sm font-semibold">Marketplace <ArrowUpRight className="w-4 h-4" /></a>
                <a href={CONTACT.supplierSignupUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/40 text-sm font-semibold">Become a supplier <ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
