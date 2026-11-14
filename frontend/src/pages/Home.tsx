import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT, HOW_ANI_WORKS, IMG, SOLUTIONS } from '../data/site';
import { Img } from '../components/Img';
import { Logo } from '../components/Logo';
import { Notch } from '../components/PageHero';
import { Stamp } from '../components/Stamp';
import { ServicesAccordion } from '../components/ServicesAccordion';
import { FeatureBlock } from '../components/FeatureBlock';
import { AniChatMock, PilotMock, SupplierMock } from '../components/Mocks';
import { Timeline } from '../components/Timeline';
import { CtaBand } from '../components/Footer';
import { Eyebrow, H2, Section } from '../components/Section';

const STRIP = ['Clean Energy Marketplace', 'Verified Suppliers', 'Intelligent Pilot', 'ANI™ Energy Intelligence', 'Smart Cities', 'Smart Companies', 'Europe', 'Africa'];

export default function Home() {
  return (
    <>
      {/* Hero: template layout */}
      <section className="relative bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2 lg:py-6">
            <div className="space-y-6 max-w-xl">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-ink">Clean energy, intelligently connected.</h1>
              <Logo className="w-full max-w-[520px] h-auto" />
              <p className="text-lg sm:text-xl lg:text-[22px] leading-snug text-body max-w-[480px]">
                We connect homes, businesses and cities with trusted clean-energy suppliers, and give them the intelligence to run it well.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/solutions" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors">Explore our solutions <ArrowRight className="w-4 h-4" /></Link>
                <a href={CONTACT.marketplaceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 text-ink font-semibold hover:border-ink transition-colors">Visit the marketplace <ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </div>
            <div className="mt-12 lg:mt-16">
              <div className="flex items-center">
                {SOLUTIONS.map((s, i) => (
                  <Link key={s.id} to={s.to} title={s.title} aria-label={s.title}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:z-20 ${i > 0 ? '-ml-3.5' : ''}`}>
                    <Img src={s.image} alt={s.imageAlt} />
                  </Link>
                ))}
                <Link to="/solutions" aria-label="See all solutions" className="ml-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-neutral-500 text-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
                </Link>
              </div>
              <Link to="/solutions" className="mt-3.5 inline-block text-sm font-medium text-ink hover:text-accent">Discover the Davwo platform</Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] rounded-[28px] overflow-hidden bg-neutral-100">
              <Img src={IMG.hero} alt="A smart city campus with rooftop solar" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest/25 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              <Notch>A taste of<br />clean energy</Notch>
              <div className="absolute bottom-[98px] sm:bottom-[118px] right-4 sm:right-6 z-10">
                <div className="rounded-full bg-white/85 backdrop-blur-sm p-0.5 shadow-sm">
                  <Stamp onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} ariaLabel="Scroll to what we can do for you" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving strip */}
      <div className="bg-forest text-white py-4 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[...STRIP, ...STRIP].map((t, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display text-sm sm:text-base font-semibold uppercase tracking-[0.18em] whitespace-nowrap">
              {t}<span className="w-1.5 h-1.5 rounded-full bg-mint" />
            </span>
          ))}
        </div>
      </div>

      <ServicesAccordion />

      {/* Instantly-style product sections */}
      <Section tone="soft" id="platform">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-20">
          <Eyebrow>The Davwo platform</Eyebrow>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05] text-ink text-balance">One platform for <span className="text-brand-gradient">the whole clean energy journey</span></h2>
          <p className="text-base sm:text-lg text-body">Find and finance clean energy, sell it, pilot it and run it, with ANI™ working across every step.</p>
        </div>
        <div className="space-y-20 lg:space-y-28">
          <FeatureBlock label="Marketplace" title={SOLUTIONS[0].headline} body={SOLUTIONS[0].description} points={SOLUTIONS[0].capabilities.slice(0, 4)} image={IMG.uiMarketplace} imageAlt="The Davwo Marketplace" to={SOLUTIONS[0].to} cta="Explore the marketplace" tint="mint" />
          <FeatureBlock reverse label="Suppliers" title={SOLUTIONS[1].headline} body={SOLUTIONS[1].description} points={SOLUTIONS[1].capabilities.slice(0, 4)} image={IMG.handshake} imageAlt="Supplier partnership" overlay={<SupplierMock />} to={SOLUTIONS[1].to} cta="Become a supplier" tint="sky" />
          <FeatureBlock label="Intelligent Pilot" title={SOLUTIONS[2].headline} body={SOLUTIONS[2].description} points={SOLUTIONS[2].capabilities.slice(0, 4)} image={IMG.businessSolar} imageAlt="Business owner reviewing solar performance" overlay={<div className="max-w-[380px]"><PilotMock /></div>} to={SOLUTIONS[2].to} cta="See the Intelligent Pilot" tint="sun" />
          <FeatureBlock reverse label="Smart Cities & Companies" title={SOLUTIONS[3].headline} body={SOLUTIONS[3].description} points={SOLUTIONS[3].capabilities.slice(0, 4)} image={IMG.controlRoom} imageAlt="An infrastructure control room" overlay={<AniChatMock />} to={SOLUTIONS[3].to} cta="Explore smart cities" tint="lavender" />
        </div>
      </Section>

      {/* Who we are */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-[28px] overflow-hidden aspect-[3/4] bg-neutral-100"><Img src={IMG.communitySolar} alt="A woman holding phones running the Davwo app on a solar farm" /></div>
            <div className="rounded-[28px] overflow-hidden aspect-[3/4] bg-neutral-100 mt-10"><Img src={IMG.userPhone} alt="A man using the Davwo app at a café" /></div>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <Eyebrow>Who we are</Eyebrow>
            <H2>Climate AI infrastructure for clean energy</H2>
            <p className="text-base sm:text-lg text-body leading-relaxed">Davwo Energy runs a Climate AI Optimisation Infrastructure platform that improves how distributed renewable energy is monitored, coordinated and optimised, from a single home battery to a whole city’s chargers, solar and fleets.</p>
            <p className="text-base sm:text-lg text-body leading-relaxed">We bring together real-time monitoring, data analytics, artificial intelligence and distributed energy coordination, so renewable technologies don’t just exist side by side, they work together intelligently at scale.</p>
            <div className="rounded-2xl border-l-4 border-accent bg-[#f6f9f8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-1.5">Our mission</p>
              <p className="font-display text-lg sm:text-xl font-semibold text-ink leading-snug">To provide intelligent digital infrastructure that enables the coordination, optimisation and scalability of distributed renewable energy systems.</p>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent">More about Davwo <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>

      <Timeline eyebrow="How ANI™ works" title="From raw energy data to decisions" steps={HOW_ANI_WORKS} image={IMG.ani} imageAlt="An engineer presenting energy data" />

      {/* Europe & Africa */}
      <Section tone="dark">
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow dark>Europe & Africa</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight leading-[1.03] text-balance">Clean power, from Lagos to Lisbon</h2>
          <p className="text-white/75 text-base sm:text-lg">We work with distributors across Europe and Africa to bring clean energy, and the intelligence to run it, to more homes, businesses and cities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { label: 'Our mission in Africa', title: 'Energise Nigeria, one rooftop at a time.', body: 'Too many Nigerian homes and businesses still run on diesel generators. We’re making solar and storage the obvious, affordable choice, from Lagos to the smallest town.', image: IMG.missionLagos },
            { label: 'Our vision for Europe', title: 'Clean energy in every corner of Europe.', body: 'From Bavarian rooftops to Irish farms and Spanish fleet depots, we want every household and business in Europe to find, finance and run clean energy in a few taps.', image: IMG.visionEurope },
          ].map((c) => (
            <div key={c.title} className="relative rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-end">
              <Img src={c.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-transparent" />
              <div className="relative p-6 sm:p-9 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">{c.label}</p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">{c.title}</h3>
                <p className="text-white/80 text-sm sm:text-base max-w-lg">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/distributors" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-forest font-semibold hover:bg-mint transition-colors">Partner with us as a distributor <ArrowRight className="w-4 h-4" /></Link>
      </Section>

      <CtaBand />
    </>
  );
}
