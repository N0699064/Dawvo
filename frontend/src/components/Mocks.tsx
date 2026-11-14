import { Activity, BatteryCharging, Bot, Building2, Bus, CheckCircle2, Gauge, Lightbulb, MessageSquare, PlugZap, ShieldCheck, Sparkles, Sun } from 'lucide-react';
import { PILOT_OBJECTIVES } from '../data/site';

const card = 'rounded-2xl bg-white shadow-[0_10px_40px_-12px_rgba(12,19,43,0.25)] border border-neutral-200/70';

/** Illustrative smart city dashboard: connected devices + ANI™ coordinating them. */
export function DashboardMock() {
  const devices = [
    { icon: PlugZap, name: 'Depot EV chargers', state: 'Smart charging', tone: 'bg-emerald-500' },
    { icon: BatteryCharging, name: 'Battery storage', state: 'Storing solar', tone: 'bg-sky-500' },
    { icon: Sun, name: 'Rooftop solar', state: 'Generating', tone: 'bg-amber-400' },
    { icon: Lightbulb, name: 'Street lighting', state: 'Scheduled', tone: 'bg-emerald-500' },
    { icon: Bus, name: 'Electric bus fleet', state: 'Route planned', tone: 'bg-emerald-500' },
    { icon: Gauge, name: 'Smart meters', state: 'Live', tone: 'bg-emerald-500' },
  ];
  return (
    <div className={`${card} p-4 sm:p-5 w-full`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-accent" />
          <span className="font-display font-semibold text-sm text-ink">City operations</span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" /> All devices connected
        </span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {devices.map(({ icon: Icon, name, state, tone }) => (
          <li key={name} className="flex items-center gap-3 rounded-xl bg-[#f6f9f8] px-3 py-2.5">
            <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-neutral-200"><Icon className="w-4 h-4 text-ink" /></span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold text-ink truncate">{name}</span>
              <span className="flex items-center gap-1.5 text-[11px] text-body"><span className={`w-1.5 h-1.5 rounded-full ${tone}`} />{state}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-xl bg-forest text-white p-3.5 flex gap-3 items-start">
        <span className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center shrink-0"><Sparkles className="w-4 h-4 text-mint" /></span>
        <p className="text-[12.5px] leading-relaxed text-white/90"><span className="font-semibold text-mint">ANI™</span> Solar is peaking, so I’m storing the surplus in the batteries and moving depot charging into the cleanest window tonight.</p>
      </div>
    </div>
  );
}

export function AniChatMock() {
  return (
    <div className={`${card} p-4 w-full max-w-[340px]`}>
      <div className="flex items-center gap-2 mb-3">
        <Bot className="w-4 h-4 text-accent" /><span className="font-display text-sm font-semibold text-ink">Ask ANI™</span>
      </div>
      <div className="space-y-2.5 text-[12.5px]">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink text-white px-3 py-2">When’s the cheapest time to charge?</div>
        <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-md bg-emerald-50 text-ink px-3 py-2">Overnight, when prices and carbon are lowest. Want me to schedule all chargers for that window?</div>
      </div>
    </div>
  );
}

export function PilotMock() {
  const insights = [
    { t: 'Opportunity', d: 'Shift charging to off-peak windows' },
    { t: 'Action', d: 'Add battery storage to capture solar surplus' },
    { t: 'Partners', d: 'Matched verified installers from the marketplace' },
  ];
  return (
    <div className={`${card} p-4 sm:p-5 w-full`}>
      <div className="flex items-center gap-2 mb-3"><Sparkles className="w-4 h-4 text-accent" /><span className="font-display text-sm font-semibold text-ink">Start your Intelligent Pilot</span></div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-body mb-2">What matters most?</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {PILOT_OBJECTIVES.map((o, i) => (
          <span key={o} className={`text-[11px] rounded-full px-2.5 py-1 border ${i < 2 ? 'bg-accent text-white border-accent' : 'bg-white text-ink border-neutral-300'}`}>{o}</span>
        ))}
      </div>
      <div className="rounded-xl bg-[#f6f9f8] p-3 space-y-2">
        <p className="text-[11px] font-semibold text-accent">Generated from your infrastructure profile</p>
        {insights.map((i) => (
          <div key={i.d} className="flex items-start gap-2 text-[12.5px] text-ink"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-px" /><span><b className="font-semibold">{i.t}:</b> {i.d}</span></div>
        ))}
      </div>
    </div>
  );
}

export function SupplierMock() {
  return (
    <div className={`${card} p-4 sm:p-5 w-full max-w-[360px]`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold rounded-full bg-navy text-white px-2.5 py-1">Davwo Supplier Portal</span>
        <ShieldCheck className="w-4 h-4 text-accent" />
      </div>
      <ul className="space-y-2 text-[12.5px]">
        {[{ i: Activity, l: 'Listings', s: 'Live on the marketplace' }, { i: MessageSquare, l: 'Enquiries', s: 'New buyer enquiry' }, { i: Gauge, l: 'Analytics', s: 'Views and quote requests' }].map(({ i: Icon, l, s }) => (
          <li key={l} className="flex items-center gap-3 rounded-xl bg-[#f6f9f8] px-3 py-2">
            <Icon className="w-4 h-4 text-ink shrink-0" />
            <span><span className="block font-semibold text-ink">{l}</span><span className="text-body text-[11px]">{s}</span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
