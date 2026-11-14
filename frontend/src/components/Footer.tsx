import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { CONTACT, SOLUTIONS } from '../data/site';
import { Logo } from './Logo';

export function CtaBand({ title = 'Ready to run your energy smarter?', body = 'Talk to us about the marketplace, becoming a supplier or distributor, an Intelligent Pilot, or a smart city dashboard.' }: { title?: string; body?: string }) {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-14 sm:py-16">
      <div className="max-w-[1320px] mx-auto rounded-[28px] bg-forest text-white overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-1.5 brand-gradient" aria-hidden="true" />
        <div className="absolute -right-24 -bottom-24 w-[380px] h-[380px] rounded-full bg-mint/10 blur-2xl" aria-hidden="true" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-14 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight leading-[1.02] text-balance">{title}</h2>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl">{body}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-semibold hover:bg-white hover:text-forest transition-colors">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={CONTACT.platformUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
              Open the platform <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white px-6 sm:px-10 lg:px-14 pt-14 pb-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-4 space-y-4">
            <Logo white className="h-11 w-auto" />
            <p className="text-sm text-white/65 max-w-sm leading-relaxed">
              Davwo Energy runs the intelligent infrastructure platform for clean energy: a marketplace, a verified supplier network and ANI™, our own energy intelligence, working with distributors across Europe and Africa.
            </p>
            <p className="text-sm font-display italic text-mint">A taste of clean energy.</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Solutions</h3>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS.map((s) => (<li key={s.id}><Link to={s.to} className="text-white/80 hover:text-mint">{s.title}</Link></li>))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-mint">About</Link></li>
              <li><Link to="/solutions" className="text-white/80 hover:text-mint">Platform</Link></li>
              <li><Link to="/distributors" className="text-white/80 hover:text-mint">Distributors</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-mint">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Get in touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-mint shrink-0" /><a href={`mailto:${CONTACT.email}`} className="text-white/80 hover:text-mint break-all">{CONTACT.email}</a></li>
              <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-mint shrink-0" /><span className="text-white/80">{CONTACT.location}</span></li>
              <li><a href={CONTACT.platformUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/80 hover:text-mint">davwo.com <ArrowUpRight className="w-3.5 h-3.5" /></a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/45">
          <span>© {year} Davwo Energy. All rights reserved.</span>
          <span>Europe · Africa</span>
        </div>
      </div>
    </footer>
  );
}
