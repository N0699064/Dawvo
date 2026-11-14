import { useState } from 'react';
import { Zap } from 'lucide-react';

interface Props { src: string; alt: string; className?: string; fallbackLabel?: string; loading?: 'lazy' | 'eager'; style?: React.CSSProperties; }

export function Img({ src, alt, className = 'w-full h-full object-cover', fallbackLabel, loading = 'lazy', style }: Props) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div role="img" aria-label={alt} className="w-full h-full bg-gradient-to-br from-emerald-50 via-white to-sky-50 flex flex-col items-center justify-center p-6 text-center">
        <Zap className="w-10 h-10 mb-2 text-accent" strokeWidth={1.5} />
        <span className="text-sm font-medium text-ink/80 max-w-xs">{fallbackLabel || alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} loading={loading} onError={() => setErr(true)} className={className} style={style} />;
}
