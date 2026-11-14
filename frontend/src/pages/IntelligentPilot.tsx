import { Link } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Gauge, PlugZap, Sun } from 'lucide-react';
import { HOW_ANI_WORKS, IMG, PILOT_OBJECTIVES, SOLUTIONS } from '../data/site';
import { PageHero } from '../components/PageHero';
import { FeatureBlock } from '../components/FeatureBlock';
import { PilotMock } from '../components/Mocks';
import { Timeline } from '../components/Timeline';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const INPUTS = [
  { icon: PlugZap, t: 'EV chargers', d: 'How many chargers you run, at home, at work or at depots.' },
  { icon: Sun, t: 'Solar', d: 'Your installed solar capacity in kW.' },
  { icon: BatteryCharging, t: 'Battery storage', d: 'Your battery capacity in kWh.' },
  { icon: Gauge, t: 'Smart meters', d: 'How many smart meters you have across your sites.' },
];

const OUTPUTS = [
  { t: 'Insights', d: 'Opportunities, actions and information tailored to your objectives.' },
  { t: 'Estimates', d: 'Estimated annual energy spend, savings and CO₂ reduction for your profile.' },
  { t: 'Matched partners', d: 'Verified technology and service partners from the Davwo Marketplace for each gap.' },
];

export default function IntelligentPilot() {
  const s = SOLUTIONS[2];
  return (
    <>
      <PageHero
        eyebrow="Intelligent Pilot"
        title="Your working energy workspace in minutes"
        intro={<p>A few questions, and ANI™ builds you a working workspace, with no empty dashboard, ever. Rough numbers are fine: ANI™ refines them once your assets connect.</p>}
        image={IMG.businessSolar}
        imageAlt="A business owner checking solar performance on a phone"
        notch={<>Pilot it<br />before you scale</>}
        stampText="• PROFILE • INSIGHT • ESTIMATE • MATCH"
        actions={<Link to="/contact?topic=Intelligent%20Pilot" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">Request a pilot <ArrowRight className="w-4 h-4" /></Link>}
      />

      <Section id="content" tone="soft">
        <FeatureBlock label="How the pilot works" title={s.headline} body={s.description} points={s.capabilities} image={IMG.solarFarm} imageAlt="A solar farm" overlay={<div className="max-w-[380px]"><PilotMock /></div>} tint="sun" />
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>Step 1 · Your infrastructure profile</Eyebrow>
            <H2>Tell ANI™ what you run</H2>
            <p className="text-base sm:text-lg text-body">Add your organisation, sector and region, then the assets you have today and any operational challenges you’re wrestling with.</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INPUTS.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-[24px] border border-neutral-200 p-6 space-y-2">
                <Icon className="w-6 h-6 text-accent" />
                <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
                <p className="text-sm text-body">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <Eyebrow>Step 2 · Your objectives</Eyebrow>
            <H2>Choose what matters most</H2>
            <p className="text-base sm:text-lg text-body">ANI™ tailors its first insights to these.</p>
          </div>
          <div className="lg:col-span-7 flex flex-wrap gap-2.5 content-start">
            {PILOT_OBJECTIVES.map((o) => (<span key={o} className="px-5 py-3 rounded-full bg-white border border-neutral-300 text-sm font-semibold text-ink">{o}</span>))}
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {OUTPUTS.map((o, i) => (
            <div key={o.t} className="rounded-[24px] bg-forest text-white p-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Step 3 · Output {i + 1}</span>
              <h3 className="font-display text-xl font-bold">{o.t}</h3>
              <p className="text-sm text-white/75">{o.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Timeline eyebrow="After the pilot" title="Then ANI™ keeps working" steps={HOW_ANI_WORKS} image={IMG.ani} imageAlt="An engineer presenting energy data" />
      <CtaBand title="Start your Intelligent Pilot" body="Tell us about your sites and assets and we’ll set up your pilot workspace." />
    </>
  );
}
