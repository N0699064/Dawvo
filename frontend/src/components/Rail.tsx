import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CONTACT, NAV } from '../data/site';
import { Logo, Mark } from './Logo';

/** Template-style dark vertical rail (desktop), compact header (mobile) and a full navigation drawer. */
export function Rail() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <>
      <aside aria-label="Primary" className="hidden lg:flex fixed top-0 left-0 bottom-0 z-40 w-[68px] bg-rail text-white flex-col items-center justify-between py-6 border-r border-white/10">
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}
          className="w-11 h-11 rounded-full bg-white text-rail flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-mint">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link to="/" aria-label="Davwo home" className="flex items-center justify-center w-12 h-40">
          <span className="-rotate-90 whitespace-nowrap font-display text-[26px] font-bold tracking-[0.18em] text-white/90 hover:text-white">DAVWO</span>
        </Link>
        <nav aria-label="Quick links" className="flex flex-col items-center gap-2.5">
          {NAV.map((n) => {
            const active = n.to === '/' ? pathname === '/' : pathname.startsWith(n.to) && !(n.to === '/solutions' && pathname !== '/solutions');
            return (
              <Link key={n.to} to={n.to} title={n.label} aria-label={n.label}
                className={`rounded-full transition-all ${active ? 'w-2 h-6 bg-mint' : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/80'}`} />
            );
          })}
        </nav>
      </aside>

      <header className="lg:hidden sticky top-0 z-40 h-14 bg-rail text-white px-4 flex items-center justify-between gap-4 border-b border-white/10">
        <Link to="/" aria-label="Davwo home" className="flex items-center gap-2">
          <Mark white className="h-6 w-auto" />
          <span className="font-display text-lg font-bold tracking-[0.12em]">DAVWO</span>
        </Link>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}
          className="w-10 h-10 rounded-full bg-white text-rail flex items-center justify-center cursor-pointer">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 lg:pl-[68px]" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative h-full w-full max-w-[460px] bg-white overflow-y-auto pt-16 lg:pt-10 pb-10 px-7 sm:px-10 shadow-2xl">
            <Logo className="h-10 w-auto mb-8" />
            <nav aria-label="Site" className="flex flex-col">
              {NAV.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.to === '/' || n.to === '/solutions'}
                  className={({ isActive }) => `group flex items-baseline gap-3 py-3 border-b border-neutral-200 ${isActive ? 'text-accent' : 'text-ink hover:text-accent'}`}>
                  <span className="text-[11px] font-medium text-neutral-500 tabular-nums">{n.index}</span>
                  <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight">{n.label}</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="block font-semibold text-ink hover:text-accent">{CONTACT.email}</a>
              <a href={CONTACT.platformUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent">
                Open the Davwo platform <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Desktop top bar with the main links, so every page is one click away. */
export function TopBar() {
  const links = [
    { to: '/solutions', label: 'Solutions' },
    { to: '/solutions/smart-cities', label: 'Smart Cities' },
    { to: '/distributors', label: 'Distributors' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <div className="hidden lg:block bg-white/90 backdrop-blur sticky top-0 z-20 border-b border-neutral-200/70">
      <div className="max-w-[1320px] mx-auto px-14 h-[68px] flex items-center justify-between">
        <Link to="/" aria-label="Davwo home"><Logo className="h-9 w-auto" /></Link>
        <nav aria-label="Main" className="flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/solutions'}
              className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-accent' : 'text-ink hover:text-accent'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/solutions/intelligent-pilot" className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors">
            Start your pilot
          </Link>
        </nav>
      </div>
    </div>
  );
}
