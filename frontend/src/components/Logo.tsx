import { IMG } from '../data/site';

export function Logo({ white = false, className = 'h-9 w-auto' }: { white?: boolean; className?: string }) {
  return <img src={white ? IMG.logoWhite : IMG.logo} alt="Davwo, the intelligent infrastructure platform" className={className} />;
}

export function Mark({ white = false, className = 'h-7 w-auto' }: { white?: boolean; className?: string }) {
  return <img src={white ? IMG.iconWhite : IMG.icon} alt="Davwo" className={className} />;
}
