export const Logo = ({ className = "h-10", showText = true }: { className?: string; showText?: boolean }) => (
  <div className={`${className} flex items-center gap-2`}>
    {/* Official RV Logo - Navy Hexagon with RV */}
    <svg
      viewBox="0 0 120 140"
      className="h-full w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Navy Hexagon Background */}
      <polygon
        points="60,15 105,40 105,100 60,125 15,100 15,40"
        fill="#1E3A8A"
        stroke="#1E3A8A"
        strokeWidth="2"
      />
      
      {/* RV Initials - White */}
      <g>
        {/* R */}
        <path
          d="M 35 55 L 35 95 M 35 75 L 50 75 Q 55 75 55 70 Q 55 60 45 60 L 35 60 M 50 75 L 60 95"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* V */}
        <path
          d="M 70 55 L 80 95 L 90 55"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
    
    {showText && (
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-xs font-bold text-primary">RAISING VENTURES</span>
        <span className="text-xs font-bold text-accent">ZAMBIA</span>
      </div>
    )}
  </div>
);
