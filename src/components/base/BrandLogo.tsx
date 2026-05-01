type BrandLogoProps = {
  compact?: boolean;
  tone?: 'light' | 'dark';
};

export default function BrandLogo({ compact = false, tone = 'light' }: BrandLogoProps) {
  const isLight = tone === 'light';
  const textColor = isLight ? 'text-white' : 'text-slate-950';
  const subColor = isLight ? 'text-slate-300' : 'text-slate-600';
  const frameColor = isLight ? 'border-white/18 bg-white/[0.06]' : 'border-slate-950/12 bg-white';

  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border ${frameColor}`}>
        <span className="absolute inset-y-2 left-2 w-1 rounded-full bg-amber-500" />
        <span className={`pl-2 text-[0.7rem] font-black tracking-[0.1em] ${textColor}`}>
          KB
        </span>
      </div>

      {!compact && (
        <div className="flex flex-col leading-none">
          <span className={`text-sm font-black uppercase tracking-[0.18em] ${textColor}`}>
            Kiral Bau
          </span>
          <span className={`mt-1.5 text-[0.58rem] uppercase tracking-[0.2em] ${subColor}`}>
            Fassade · WDVS · Sanierung
          </span>
        </div>
      )}
    </div>
  );
}
