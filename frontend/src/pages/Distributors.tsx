import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Handshake, LineChart, Store } from 'lucide-react';
import { IMG } from '../data/site';
import { PageHero } from '../components/PageHero';
import { Img } from '../components/Img';
import { FeatureBlock } from '../components/FeatureBlock';
import { SupplierMock } from '../components/Mocks';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const BENEFITS = [
  { icon: Store, t: 'Marketplace reach', d: 'List your range on the Davwo Marketplace and reach homes and businesses ready to order.' },
  { icon: LineChart, t: 'Demand intelligence', d: 'ANI™ matches demand to your products and shows where interest is growing.' },
  { icon: Handshake, t: 'Project partnerships', d: 'Join smart city and infrastructure projects where your hardware is needed.' },
  { icon: Globe2, t: 'Two continents', d: 'We work with distributors across Europe and Africa.' },
];

export default function Distributors() {
  return (
    <>
      <PageHero
        eyebrow="Distributors & Partners"
        title="Working with distributors across Europe and Africa"
        intro={<p>Davwo works with distributors to bring clean energy technology, and the intelligence to run it, to more homes, businesses and cities. Clean power, from Lagos to Lisbon.</p>}
        image={IMG.handshake}
        imageAlt="Two partners shaking hands"
        notch={<>From Lagos<br />to Lisbon</>}
        stampText="• DISTRIBUTE • CONNECT • GROW • SCALE"
        actions={<Link to="/contact?topic=Distribution%20partnership" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">Become a distribution partner <ArrowRight className="w-4 h-4" /></Link>}
      />

      <Section id="content" tone="soft">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-[24px] bg-white border border-neutral-200 p-6 space-y-3">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center"><Icon className="w-5 h-5 text-accent" /></span>
              <h3 className="font-display text-lg font-bold text-ink">{t}</h3>
              <p className="text-sm text-body leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow>Where we work</Eyebrow>
          <H2>Africa and Europe</H2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-[28px] border border-neutral-200 overflow-hidden">
            <div className="aspect-[16/9] bg-neutral-100"><Img src={IMG.missionLagos} alt="Lagos, Nigeria" /></div>
            <div className="p-7 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Africa</p>
              <h3 className="font-display text-2xl font-bold text-ink">Energise Nigeria, one rooftop at a time.</h3>
              <p className="text-body">Too many Nigerian homes and businesses still run on diesel generators. With our distribution partners we’re making solar and storage the obvious, affordable choice, from Lagos to the smallest town.</p>
            </div>
          </article>
          <article className="rounded-[28px] border border-neutral-200 overflow-hidden">
            <div className="aspect-[16/9] bg-neutral-100"><Img src={IMG.visionEurope} alt="Solar panels in Europe" /></div>
            <div className="p-7 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Europe</p>
              <h3 className="font-display text-2xl font-bold text-ink">Clean energy in every corner of Europe.</h3>
              <p className="text-body">From Bavarian rooftops to Irish farms and Spanish fleet depots, we want every household and business in Europe to find, finance and run clean energy in a few taps.</p>
            </div>
          </article>
        </div>
      </Section>

      <Section tone="soft">
        <FeatureBlock label="For distributors" title="Plug your range into the Davwo platform" body="Distributors get the same tools as our suppliers: listings with your own pricing, buyer enquiries, analytics and team access, plus support on smart city and infrastructure projects." points={['Supplier Portal listings and enquiries', 'Your own lease, finance and purchase pricing', 'ANI™ demand matching', 'Smart city and company project support']} image={IMG.batteryStorage} imageAlt="Battery storage unit" overlay={<SupplierMock />} to="/solutions/suppliers" cta="See the supplier tools" tint="mint" />
      </Section>

      <CtaBand title="Distribute clean energy with Davwo" body="Tell us about your region, product range and customers, and we’ll get back to you about a partnership." />
    </>
  );
}
