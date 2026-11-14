import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT, IMG, SOLUTIONS } from '../data/site';
import { PageHero } from '../components/PageHero';
import { FeatureBlock } from '../components/FeatureBlock';
import { SupplierMock } from '../components/Mocks';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const STEPS = [
  { n: '1', t: 'Register your company', d: 'Create a supplier account with your company name, category and region.' },
  { n: '2', t: 'List your products', d: 'Add chargers, batteries, solar or energy services with your own plan pricing.' },
  { n: '3', t: 'Get verified', d: 'Verified-supplier badges show buyers you’ve been checked.' },
  { n: '4', t: 'Receive enquiries', d: 'Buyers ready to order reach you directly, and ANI™ matches you to the right ones.' },
];

const CATS = ['EV Chargers', 'Battery Solutions', 'Solar Solutions', 'Energy Services', 'Consulting Services'];

export default function Suppliers() {
  const s = SOLUTIONS[1];
  return (
    <>
      <PageHero
        eyebrow="Supplier Network"
        title="Sell on the Davwo Marketplace"
        intro={<p>List your chargers, batteries, solar and energy services with your own plan pricing, and reach buyers ready to order.</p>}
        image={IMG.truck}
        imageAlt="An electric truck charging at a depot"
        notch={<>Reach buyers<br />ready to order</>}
        actions={<a href={CONTACT.supplierSignupUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">List your products <ArrowUpRight className="w-4 h-4" /></a>}
      />

      <Section id="content" tone="soft">
        <FeatureBlock label="Davwo Supplier Portal" title="Everything you need to sell clean energy" body={s.description} points={s.capabilities} image={IMG.handshake} imageAlt="Supplier partnership" overlay={<SupplierMock />} tint="sky" />
      </Section>

      <Section>
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow>How it works</Eyebrow>
          <H2>From sign-up to your first enquiry</H2>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <li key={st.n} className="rounded-[24px] border border-neutral-200 p-6 space-y-2">
              <span className="font-display text-5xl font-extrabold text-accent">{st.n}</span>
              <h3 className="font-display text-lg font-bold text-ink">{st.t}</h3>
              <p className="text-sm text-body leading-relaxed">{st.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Eyebrow dark>Supplier categories</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-[1.03]">Who can sell on Davwo</h2>
            <p className="text-white/75">Installers, manufacturers, service providers and distributors across Europe and Africa.</p>
            <Link to="/distributors" className="inline-flex items-center gap-2 font-semibold text-mint">Are you a distributor? <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-6 flex flex-wrap gap-2.5">
            {CATS.map((c) => (<span key={c} className="px-5 py-3 rounded-full border border-white/25 text-sm font-semibold">{c}</span>))}
          </div>
        </div>
      </Section>

      <CtaBand title="Become a Davwo supplier" body="Register your company to add products to the Davwo Marketplace and reach buyers directly." />
    </>
  );
}
