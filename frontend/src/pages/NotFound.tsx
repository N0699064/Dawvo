import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export default function NotFound() {
  return (
    <Section>
      <div className="py-16 text-center space-y-5">
        <p className="font-display text-7xl font-extrabold text-accent">404</p>
        <h1 className="font-display text-3xl font-bold text-ink">This page doesn’t exist</h1>
        <Link to="/" className="inline-flex px-6 py-3 rounded-full bg-accent text-white font-semibold">Back to home</Link>
      </div>
    </Section>
  );
}
