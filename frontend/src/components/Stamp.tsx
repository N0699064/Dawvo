interface Props { text?: string; onClick?: () => void; ariaLabel?: string; size?: 'lg' | 'md'; dark?: boolean; }

export function Stamp({ text = '• CONNECT • MONITOR • OPTIMISE • SCALE', onClick, ariaLabel = 'Scroll down', size = 'lg', dark = false }: Props) {
  const dim = size === 'lg' ? 'w-32 h-32' : 'w-24 h-24';
  const inner = size === 'lg' ? 'w-[74px] h-[74px]' : 'w-14 h-14';
  const id = `davwo-stamp-${size}-${dark ? 'd' : 'l'}`;
  const stroke = dark ? '#ffffff' : '#0c132b';
  const content = (
    <div className={`relative ${dim} flex items-center justify-center select-none`}>
      <svg viewBox="0 0 140 140" className="w-full h-full animate-spin-slow" aria-hidden="true">
        <defs><path id={id} d="M 70, 70 m -54, 0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" /></defs>
        <circle cx="70" cy="70" r="67" fill="none" stroke={stroke} strokeWidth="1" strokeOpacity="0.6" />
        <text fill={stroke} fontSize="11.2" fontWeight="600" letterSpacing="2.4" className="font-display uppercase">
          <textPath href={`#${id}`} startOffset="0%">{text}</textPath>
        </text>
      </svg>
      <div className={`absolute ${inner} rounded-full bg-accent text-white flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105`}>
        <svg viewBox="0 0 24 24" className="w-6 h-6 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
  if (!onClick) return content;
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="group inline-flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4">
      {content}
    </button>
  );
}
