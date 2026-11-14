import { ArrowUpRight, BadgeCheck, CreditCard, Smartphone, Sparkles } from 'lucide-react';
import { CONTACT, IMG, MARKET_CATEGORIES } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Img } from '../components/Img';
import { FeatureBlock } from '../components/FeatureBlock';
import { AniChatMock } from '../components/Mocks';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const BENEFITS = [
  { icon: BadgeCheck, title: 'Buy with confidence', body: 'Verified-supplier badges show which installers have been checked before you request a quote.' },
  { icon: CreditCard, title: 'Lease, finance or buy', body: 'Personalise your terms and see your monthly price instantly, for personal or business use.' },
  { icon: Smartphone, title: 'Your energy, in your pocket', body: 'Compare quotes, track your system and spread the cost, all from your phone.' },
  { icon: Sparkles, title: 'AI-powered matching', body: 'ANI™ matches your needs to the right products and suppliers, then keeps watching your system once it’s installed.' },
];

export default function Marketplace() {
  const browse = (
    <a href={CONTACT.marketplaceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">Browse the marketplace <ArrowUpRight className="w-4 h-4" /></a>
  );
  return (
    <>
      <PageHero
        eyebrow="Clean Energy Marketplace"
        title="Lease, finance or buy your energy hardware"
        intro={<p>A digital marketplace connecting homes and businesses to clean energy solutions through trusted suppliers. EV chargers, home batteries, solar and energy services, supplied, installed and monitored by Davwo.</p>}
        image={IMG.solarRooftop}
        imageAlt="A modern home with rooftop solar"
        notch={<>Clean energy,<br />a few taps away</>}
        actions={browse}
      />

      <Section id="content" tone="soft">
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow>What’s on the marketplace</Eyebrow>
          <H2>Hardware and services for every site</H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MARKET_CATEGORIES.map((c) => (
            <div key={c.title} className="rounded-[24px] bg-white border border-neutral-200 overflow-hidden">
              <div className="aspect-[4/3] bg-neutral-100"><Img src={c.image} alt={c.title} /></div>
              <div className="p-5 space-y-1.5">
                <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                <p className="text-sm text-body">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="space-y-20">
          <FeatureBlock label="On davwo.com" title="See your monthly price before you commit" body="Every product shows the cheapest monthly price, with deposit, term and buy-outright options. Switch between personal (inc. VAT) and business (ex. VAT) pricing in one click." image={IMG.uiMarketplace} imageAlt="The Davwo Marketplace" tint="mint" />
          <FeatureBlock reverse label="After you buy" title="Installed, connected and monitored" body="Once your charger, battery or solar is installed it connects to the Davwo platform, so you can see it live and ask ANI™ what it’s doing and what to do next." image={IMG.smartCharger} imageAlt="A smart EV charger" overlay={<AniChatMock />} tint="sky" />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-[24px] bg-white border border-neutral-200 p-6 space-y-3">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center"><Icon className="w-5 h-5 text-accent" /></span>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm text-body leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Find your clean energy setup" body="Browse chargers, batteries, solar and energy services on the Davwo Marketplace, or talk to us about a larger project." />
    </>
  );
}
