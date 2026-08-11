export const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`${className} flex items-center gap-2`}>
    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
      RV
    </div>
    <div className="hidden sm:flex flex-col leading-tight">
      <span className="text-xs font-bold text-primary">RAISING VENTURES</span>
      <span className="text-xs font-bold text-accent">ZAMBIA</span>
    </div>
  </div>
);
