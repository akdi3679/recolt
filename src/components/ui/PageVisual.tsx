type Variant =
  | "methode"
  | "laboratoire"
  | "tarifs"
  | "equipe"
  | "secteur-public"
  | "a-propos"
  | "contact";

export function PageVisual({ variant }: { variant: Variant }) {
  return (
    <div className="relative aspect-[4/3] w-full">
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {variant === "methode" && <MethodeVisual />}
        {variant === "laboratoire" && <LaboratoireVisual />}
        {variant === "tarifs" && <TarifsVisual />}
        {variant === "equipe" && <EquipeVisual />}
        {variant === "secteur-public" && <SecteurPublicVisual />}
        {variant === "a-propos" && <AProposVisual />}
        {variant === "contact" && <ContactVisual />}
      </svg>
    </div>
  );
}

function Base() {
  return (
    <>
      <rect width="400" height="300" fill="#0E1A14" />
      <defs>
        <pattern id="pv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#F4F1EA" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#pv-grid)" />
    </>
  );
}

function MethodeVisual() {
  const nodes = [
    { x: 70, y: 150, label: "01" },
    { x: 200, y: 150, label: "02" },
    { x: 330, y: 150, label: "03" },
  ];
  return (
    <>
      <Base />
      <line x1="70" y1="150" x2="330" y2="150" stroke="#D1663B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="30" fill="none" stroke="#D1663B" strokeWidth="1" opacity="0.5" />
          <circle cx={n.x} cy={n.y} r="22" fill="#16281D" stroke="#D1663B" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#D1663B" fontSize="14" fontFamily="serif">
            {n.label}
          </text>
        </g>
      ))}
    </>
  );
}

function LaboratoireVisual() {
  const dots = [
    [80, 90], [130, 80], [180, 110], [230, 95], [280, 130],
    [110, 150], [160, 140], [210, 170], [260, 155], [310, 180],
    [90, 210], [140, 200], [190, 225], [240, 215], [290, 235],
  ];
  return (
    <>
      <Base />
      <path
        d="M50 60 Q150 30 220 60 T350 90 L350 240 Q250 260 150 250 T50 240 Z"
        fill="#16281D"
        stroke="#4A6B57"
        strokeWidth="0.75"
        opacity="0.8"
      />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#A3B7A9" opacity={0.5 + (i % 4) * 0.15} />
      ))}
      <circle cx="260" cy="155" r="8" fill="#A3B7A9" />
      <circle cx="260" cy="155" r="16" fill="none" stroke="#A3B7A9" strokeWidth="1" opacity="0.4" />
    </>
  );
}

function TarifsVisual() {
  return (
    <>
      <Base />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const active = (row + col) % 3 === 0;
          return (
            <rect
              key={`${row}-${col}`}
              x={60 + col * 75}
              y={60 + row * 55}
              width={60}
              height={45}
              fill={active ? "#D1663B" : "transparent"}
              stroke="#D1663B"
              strokeWidth="0.75"
              opacity={active ? 0.9 : 0.3}
              rx="2"
            />
          );
        }),
      )}
    </>
  );
}

function EquipeVisual() {
  const circles = [
    { x: 100, y: 100, r: 30 },
    { x: 200, y: 90, r: 26 },
    { x: 300, y: 110, r: 30 },
    { x: 140, y: 200, r: 28 },
    { x: 260, y: 210, r: 32 },
  ];
  return (
    <>
      <Base />
      {circles.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r={c.r} fill="none" stroke="#D1663B" strokeWidth="1" opacity="0.5" />
          <circle cx={c.x} cy={c.y} r={c.r - 8} fill="#16281D" stroke="#D1663B" strokeWidth="0.75" />
          <text
            x={c.x}
            y={c.y + 4}
            textAnchor="middle"
            fill="#D1663B"
            fontSize="10"
            fontFamily="serif"
            opacity="0.7"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </>
  );
}

function SecteurPublicVisual() {
  return (
    <>
      <Base />
      <rect x="80" y="80" width="240" height="150" fill="none" stroke="#D1663B" strokeWidth="1" rx="2" />
      <line x1="80" y1="110" x2="320" y2="110" stroke="#D1663B" strokeWidth="0.75" />
      <circle cx="100" cy="95" r="4" fill="#D1663B" />
      <circle cx="115" cy="95" r="4" fill="#D1663B" opacity="0.5" />
      <circle cx="130" cy="95" r="4" fill="#D1663B" opacity="0.3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="100" y1={135 + i * 18} x2={280 - i * 20} y2={135 + i * 18} stroke="#F4F1EA" strokeWidth="1" opacity="0.3" />
      ))}
    </>
  );
}

function AProposVisual() {
  return (
    <>
      <Base />
      <circle cx="200" cy="150" r="70" fill="none" stroke="#D1663B" strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="150" r="55" fill="none" stroke="#D1663B" strokeWidth="0.75" opacity="0.4" />
      <circle cx="200" cy="150" r="40" fill="#16281D" stroke="#D1663B" strokeWidth="1.25" />
      <text x="200" y="156" textAnchor="middle" fill="#D1663B" fontSize="18" fontFamily="serif">
        BE
      </text>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + Math.cos(rad) * 60;
        const y1 = 150 + Math.sin(rad) * 60;
        const x2 = 200 + Math.cos(rad) * 68;
        const y2 = 150 + Math.sin(rad) * 68;
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D1663B" strokeWidth="1" opacity="0.5" />
        );
      })}
    </>
  );
}

function ContactVisual() {
  return (
    <>
      <Base />
      <path
        d="M200 70 C160 70 130 100 130 140 C130 190 200 240 200 240 C200 240 270 190 270 140 C270 100 240 70 200 70 Z"
        fill="#16281D"
        stroke="#D1663B"
        strokeWidth="1.25"
      />
      <circle cx="200" cy="135" r="22" fill="none" stroke="#D1663B" strokeWidth="1" />
      <circle cx="200" cy="135" r="8" fill="#D1663B" />
    </>
  );
}