/**
 * Davwo Energy website content.
 * Sources: the previous davwoenergy.co.uk site (About, mission, story, team, contact),
 * the Davwo platform codebase (jeffdavwoenergy/davwo-energy) and davwo.com.
 */

export const CONTACT = {
  email: 'info@davwoenergy.com',
  location: 'Global Operations',
  platformUrl: 'https://davwo.com/en',
  marketplaceUrl: 'https://davwo.com/en/marketplace',
  supplierSignupUrl: 'https://davwo.com/en/supplier/signup',
  pilotUrl: 'https://davwo.com/en/demo/start',
};

export const IMG = {
  logo: '/images/davwo-logo.png',
  logoWhite: '/images/davwo-logo-white.png',
  icon: '/images/davwo-icon.png',
  iconWhite: '/images/davwo-icon-white.png',
  hero: '/images/smart-city-solar.jpg',
  cleanEnergy: '/images/clean-energy-hero.jpg',
  grid: '/images/grid-hero.jpg',
  controlRoom: '/images/control-room.jpg',
  handshake: '/images/partners-handshake.jpg',
  cityBuses: '/images/city-buses.jpg',
  evGarage: '/images/ev-parking-garage.jpg',
  truck: '/images/fleet-truck-charging.jpg',
  solarFarm: '/images/solar-farm.jpg',
  solarRooftop: '/images/solar-rooftop.jpg',
  solarPanel: '/images/solar-panel.jpg',
  businessSolar: '/images/business-solar.jpg',
  communitySolar: '/images/community-solar.jpg',
  userPhone: '/images/user-phone.jpg',
  mobileFirst: '/images/mobile-first.jpg',
  missionLagos: '/images/mission-lagos.jpg',
  visionEurope: '/images/vision-europe.jpg',
  ani: '/images/ani-intelligence.jpg',
  wallbox: '/images/ev-charger-wallbox.jpg',
  smartCharger: '/images/smart-ev-charger.jpg',
  batteryPack: '/images/battery-pack.jpg',
  batteryStorage: '/images/battery-storage.jpg',
  serviceHub: '/images/energy-service-hub.jpg',
  smartMeter: '/images/smart-energy-meter.jpg',
  uiMarketplace: '/images/ui-marketplace.jpg',
  uiSupplier: '/images/ui-supplier-portal.jpg',
  teamCollins: '/images/team-awikpe-collins.jpg',
  teamJeff: '/images/team-jeff-conrad.jpg',
};

export interface NavItem { index: string; label: string; to: string; }

export const NAV: NavItem[] = [
  { index: '01', label: 'Home', to: '/' },
  { index: '02', label: 'Solutions', to: '/solutions' },
  { index: '03', label: 'Marketplace', to: '/solutions/marketplace' },
  { index: '04', label: 'Suppliers', to: '/solutions/suppliers' },
  { index: '05', label: 'Intelligent Pilot', to: '/solutions/intelligent-pilot' },
  { index: '06', label: 'Smart Cities & Companies', to: '/solutions/smart-cities' },
  { index: '07', label: 'Distributors', to: '/distributors' },
  { index: '08', label: 'About', to: '/about' },
  { index: '09', label: 'Contact', to: '/contact' },
];

export interface Solution {
  id: string;
  index: string;
  title: string;
  short: string;
  to: string;
  headline: string;
  description: string;
  capabilities: string[];
  tags: string[];
  image: string;
  imageAlt: string;
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'marketplace',
    index: '01',
    title: 'Clean Energy Marketplace',
    short: 'Marketplace',
    to: '/solutions/marketplace',
    headline: 'Lease, finance or buy your energy hardware.',
    description:
      'A digital marketplace connecting homes and businesses to clean energy solutions through trusted suppliers, with AI-powered matching and data intelligence. EV chargers, home batteries, solar and energy services, supplied, installed and monitored by Davwo.',
    capabilities: [
      'EV chargers, from home wallboxes to DC rapid chargers',
      'Battery storage for homes and businesses',
      'Solar solutions and energy services',
      'Lease, finance or buy, with your monthly price shown instantly',
      'Verified-supplier badges before you request a quote',
      'Personal and business pricing views',
    ],
    tags: ['Homes', 'Businesses', 'Fleets'],
    image: IMG.uiMarketplace,
    imageAlt: 'The Davwo Marketplace on davwo.com',
  },
  {
    id: 'suppliers',
    index: '02',
    title: 'Supplier Network',
    short: 'Suppliers',
    to: '/solutions/suppliers',
    headline: 'Sell on the Davwo Marketplace.',
    description:
      'Suppliers and installers list chargers, batteries, solar and energy services with their own plan pricing, and reach buyers ready to order. The Davwo Supplier Portal gives every supplier a dashboard for listings, enquiries, analytics and their team.',
    capabilities: [
      'Register your company and list products',
      'Set your own lease, finance and purchase pricing',
      'Receive and manage buyer enquiries',
      'Listing analytics and performance',
      'Team access for your sales and install staff',
      'ANI™ matches your products to the right buyers',
    ],
    tags: ['Installers', 'Manufacturers', 'Service providers'],
    image: IMG.handshake,
    imageAlt: 'Two business partners shaking hands',
  },
  {
    id: 'intelligent-pilot',
    index: '03',
    title: 'Intelligent Pilot',
    short: 'Intelligent Pilot',
    to: '/solutions/intelligent-pilot',
    headline: 'A few questions, and ANI™ builds you a working workspace.',
    description:
      'The Intelligent Pilot turns an organisation’s infrastructure profile into a ready-to-use Davwo workspace: first insights, an estimate of savings and carbon reduction, and matched marketplace partners. No empty dashboard, ever.',
    capabilities: [
      'Tell us your chargers, solar, batteries and smart meters',
      'Choose your objectives: cost, carbon, uptime, revenue or compliance',
      'Instant insights tailored to those objectives',
      'Estimated annual spend, savings and CO₂ reduction',
      'Matched technology and service partners',
      'ANI™ refines everything once real assets connect',
    ],
    tags: ['Businesses', 'Fleets', 'Public sector'],
    image: IMG.businessSolar,
    imageAlt: 'Business owner checking a solar installation on a phone',
  },
  {
    id: 'smart-cities',
    index: '04',
    title: 'Smart Cities & Smart Companies',
    short: 'Smart Cities',
    to: '/solutions/smart-cities',
    headline: 'One dashboard where every device connects, communicates and runs itself.',
    description:
      'Cities and companies connect all of their energy devices, from chargers and batteries to solar, meters and fleet vehicles, to a single Davwo dashboard. ANI™, our own GPT for energy infrastructure, lets those devices talk to each other and operate autonomously.',
    capabilities: [
      'Connect chargers, batteries, solar, meters and fleets',
      'Live monitoring with alerts the moment something needs attention',
      'Devices share data and coordinate with each other',
      'ANI™ schedules, balances and optimises automatically',
      'Ask ANI™ anything in plain English',
      'Cost, carbon and performance reporting',
    ],
    tags: ['Cities', 'Councils', 'Campuses', 'Enterprises'],
    image: IMG.hero,
    imageAlt: 'A smart city campus with rooftop solar',
  },
  {
    id: 'distributors',
    index: '05',
    title: 'Distribution across Europe & Africa',
    short: 'Distributors',
    to: '/distributors',
    headline: 'Clean power, from Lagos to Lisbon.',
    description:
      'Davwo works with distributors across Europe and Africa to bring clean energy technology, and the intelligence to run it, to more homes, businesses and cities. Distributors list on the marketplace, reach new buyers and plug into the Davwo platform.',
    capabilities: [
      'Distribution partnerships across Europe and Africa',
      'Marketplace listings and buyer enquiries',
      'Demand matching powered by ANI™',
      'Support for smart city and infrastructure projects',
    ],
    tags: ['Distributors', 'Wholesalers', 'Regional partners'],
    image: IMG.solarFarm,
    imageAlt: 'A large ground-mounted solar farm',
  },
];

/** Platform layers, from the previous site's Platform Architecture page. */
export const LAYERS = [
  {
    index: '01',
    title: 'Clean Energy Marketplace Layer',
    body: 'Access to distributed renewable energy technologies and services, connecting users, suppliers and innovators within one platform.',
    points: ['Solar systems', 'Battery storage', 'EV charging infrastructure', 'Clean energy services and solutions'],
  },
  {
    index: '02',
    title: 'Monitoring & Analytics Layer',
    body: 'Real-time visibility into energy systems, so users and operators understand and manage distributed energy.',
    points: ['Energy generation and consumption', 'System performance and efficiency', 'Energy usage patterns', 'Carbon impact and sustainability metrics'],
  },
  {
    index: '03',
    title: 'Climate AI Layer (ANI™)',
    body: 'The intelligence engine of the Davwo platform, analysing real-time and historical data to optimise performance.',
    points: ['Optimise consumption and performance', 'Predict demand and supply', 'Cost efficiency', 'Plain-English answers and recommendations'],
  },
  {
    index: '04',
    title: 'Distributed Energy Coordination Layer',
    body: 'Integrates multiple energy technologies into one coordinated digital infrastructure across many locations.',
    points: ['Solar, battery and EV charging coordination', 'Resources across multiple sites', 'Intelligent energy flow', 'Scalable integration'],
  },
];

/** How ANI™ works, from the platform's demo flow. */
export const HOW_ANI_WORKS = [
  { step: '01', title: 'Monitor', body: 'Live telemetry from every charger, battery and site. Know instantly what’s running and what needs attention.' },
  { step: '02', title: 'Analyse', body: 'ANI™ correlates usage against cost and carbon, so you see exactly where money and emissions are going.' },
  { step: '03', title: 'Forecast', body: 'History plus weather and demand drivers. Plan capacity before the peak, not after.' },
  { step: '04', title: 'Ask ANI™', body: 'Any question, in plain language. Answers come back as live charts, tables and KPIs.' },
  { step: '05', title: 'Optimise', body: 'ANI™ finds the cheapest, cleanest window to charge, store or use energy.' },
  { step: '06', title: 'Act', body: 'ANI™ matches you to verified technology and service partners. An ecosystem, not a dead end.' },
];

/** Device and platform integrations supported by the Davwo platform codebase. */
export const INTEGRATIONS = [
  'Victron VRM',
  'SolarEdge Monitoring',
  'Enphase Enlighten',
  'Tesla Fleet API (Energy)',
  'Tesla Fleet API (Vehicles)',
  'Geotab MyGeotab',
  'OCPP 1.6J / 2.0.1',
  'OCPI 2.2.1',
];

export const PILOT_OBJECTIVES = [
  'Cut energy costs',
  'Reduce carbon emissions',
  'Improve asset uptime & reliability',
  'Grow revenue from assets',
  'Meet compliance & reporting (SECR/ESOS)',
];

export const MARKET_CATEGORIES = [
  { title: 'EV Chargers', body: 'Home wallboxes, depot chargers and DC rapid chargers.', image: IMG.wallbox },
  { title: 'Battery Solutions', body: 'Home and business batteries, from modular packs to whole-home storage.', image: IMG.batteryStorage },
  { title: 'Solar Solutions', body: 'Rooftop and ground-mounted solar for homes, businesses and farms.', image: IMG.solarPanel },
  { title: 'Energy Services', body: 'Smart energy monitoring, hubs and meters, powered by ANI™.', image: IMG.serviceHub },
];

export const TEAM = [
  {
    name: 'Awikpe Anirejoritse Collins',
    role: 'Founder & CEO',
    image: IMG.teamCollins,
    bio: 'Awikpe Anirejoritse Collins is the founder of Davwo Energy and holds a Master’s degree in International Relations from the University of Hertfordshire. His work focuses on climate innovation, energy transition and intelligent digital infrastructure for clean energy systems.',
  },
  {
    name: 'Jeff Conrad',
    role: 'Lead Technical Architect',
    image: IMG.teamJeff,
    bio: 'Jeff Conrad studied Software Engineering at Nottingham Trent University. His expertise spans artificial intelligence, deep learning and scalable system architecture, and he leads the technical development of the Davwo platform and ANI™.',
  },
];
