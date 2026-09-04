/**
 * ProductPackshot.jsx — High-fidelity vector illustrations of LOCTITE products
 */

export function ProductPackshot({ productId, name }) {
  const label = name || "LOCTITE Product Illustration";

  if (productId === "threadlocker-blue-242") {
    return (
      <svg role="img" aria-label={label} viewBox="0 0 100 140" width="90" height="130" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
        {/* Threadlocker blue bottle */}
        <rect x="36" y="10" width="28" height="24" rx="3" fill="#004D90" />
        <rect x="42" y="2" width="16" height="10" rx="2" fill="#FFFFFF" />
        <path d="M 28 34 Q 28 30 36 30 L 64 30 Q 72 30 72 34 L 74 125 Q 74 135 64 135 L 36 135 Q 26 135 26 125 Z" fill="#004D90" />
        {/* Label */}
        <rect x="30" y="52" width="40" height="65" rx="3" fill="#FFFFFF" />
        <rect x="30" y="52" width="40" height="16" fill="#E1000F" />
        <text x="50" y="64" fill="#FFFFFF" fontSize="8" fontWeight="900" fontStyle="italic" textAnchor="middle">LOCTITE</text>
        <text x="50" y="78" fill="#004D90" fontSize="7" fontWeight="800" textAnchor="middle">THREADLOCKER</text>
        <text x="50" y="90" fill="#E1000F" fontSize="12" fontWeight="900" textAnchor="middle">242</text>
        <text x="50" y="104" fill="#666666" fontSize="5" fontWeight="600" textAnchor="middle">REMOVABLE</text>
      </svg>
    );
  }

  if (productId === "power-grab-express" || productId === "pl-premium-max") {
    const isPl = productId === "pl-premium-max";
    return (
      <svg viewBox="0 0 80 150" width="70" height="135" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
        {/* Cartridge nozzle */}
        <polygon points="40,2 36,25 44,25" fill="#EEEEEE" />
        <rect x="32" y="25" width="16" height="12" fill="#CCCCCC" />
        {/* Body tube */}
        <rect x="22" y="37" width="36" height="105" rx="3" fill={isPl ? "#1A1A1A" : "#FFFFFF"} stroke="#DDDDDD" />
        {/* Header banner */}
        <rect x="22" y="42" width="36" height="22" fill="#E1000F" />
        <text x="40" y="57" fill="#FFFFFF" fontSize="7" fontWeight="900" fontStyle="italic" textAnchor="middle">LOCTITE</text>
        {/* Product title */}
        <text x="40" y="78" fill={isPl ? "#FFFFFF" : "#1A1A1A"} fontSize="6" fontWeight="900" textAnchor="middle">
          {isPl ? "PL PREMIUM" : "POWER GRAB"}
        </text>
        <text x="40" y="88" fill={isPl ? "#E1000F" : "#004D90"} fontSize="5" fontWeight="800" textAnchor="middle">
          {isPl ? "MAX 100%" : "EXPRESS"}
        </text>
        <rect x="26" y="96" width="28" height="3" rx="1" fill="#E1000F" />
      </svg>
    );
  }

  if (productId === "super-glue-ultra-gel-control") {
    return (
      <svg viewBox="0 0 100 140" width="85" height="125" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.18))" }}>
        {/* Precision applicator tip */}
        <polygon points="50,4 47,20 53,20" fill="#333333" />
        <rect x="46" y="20" width="8" height="10" rx="1" fill="#E1000F" />
        {/* Squeeze body - Black rubberized */}
        <path d="M 32 30 Q 50 26 68 30 L 72 120 Q 70 132 50 132 Q 30 132 28 120 Z" fill="#222222" />
        {/* Blue side squeeze grips */}
        <path d="M 28 45 Q 36 75 28 105" stroke="#004D90" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 72 45 Q 64 75 72 105" stroke="#004D90" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Label */}
        <rect x="36" y="45" width="28" height="60" rx="2" fill="#FFFFFF" />
        <rect x="36" y="45" width="28" height="14" fill="#E1000F" />
        <text x="50" y="55" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontStyle="italic" textAnchor="middle">LOCTITE</text>
        <text x="50" y="67" fill="#E1000F" fontSize="5" fontWeight="900" textAnchor="middle">ULTRA GEL</text>
        <text x="50" y="76" fill="#1A1A1A" fontSize="4.5" fontWeight="800" textAnchor="middle">CONTROL</text>
        <text x="50" y="86" fill="#004D90" fontSize="3.5" fontWeight="700" textAnchor="middle">SHOCK RESIST</text>
      </svg>
    );
  }

  if (productId === "super-glue-gel-control") {
    return (
      <svg viewBox="0 0 100 140" width="85" height="125" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.18))" }}>
        {/* Applicator tip */}
        <polygon points="50,4 47,20 53,20" fill="#333333" />
        <rect x="46" y="20" width="8" height="10" rx="1" fill="#E1000F" />
        {/* Squeeze body - Classic blue with red accents */}
        <path d="M 32 30 Q 50 26 68 30 L 72 120 Q 70 132 50 132 Q 30 132 28 120 Z" fill="#004D90" />
        {/* Red side grips */}
        <path d="M 28 45 Q 36 75 28 105" stroke="#E1000F" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 72 45 Q 64 75 72 105" stroke="#E1000F" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Label */}
        <rect x="36" y="45" width="28" height="60" rx="2" fill="#FFFFFF" />
        <rect x="36" y="45" width="28" height="14" fill="#E1000F" />
        <text x="50" y="55" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontStyle="italic" textAnchor="middle">LOCTITE</text>
        <text x="50" y="67" fill="#004D90" fontSize="5" fontWeight="900" textAnchor="middle">SUPER GLUE</text>
        <text x="50" y="76" fill="#E1000F" fontSize="4.5" fontWeight="800" textAnchor="middle">GEL CONTROL</text>
        <text x="50" y="86" fill="#444444" fontSize="3.5" fontWeight="700" textAnchor="middle">NO DRIP</text>
      </svg>
    );
  }

  // Default: Super Glue Liquid Control
  return (
    <svg viewBox="0 0 100 140" width="85" height="125" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.18))" }}>
      {/* Precision tip */}
      <polygon points="50,4 47,20 53,20" fill="#333333" />
      <rect x="46" y="20" width="8" height="10" rx="1" fill="#004D90" />
      {/* Squeeze body - Red with blue side grips */}
      <path d="M 32 30 Q 50 26 68 30 L 72 120 Q 70 132 50 132 Q 30 132 28 120 Z" fill="#E1000F" />
      <path d="M 28 45 Q 36 75 28 105" stroke="#004D90" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 72 45 Q 64 75 72 105" stroke="#004D90" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Label */}
      <rect x="36" y="45" width="28" height="60" rx="2" fill="#FFFFFF" />
      <rect x="36" y="45" width="28" height="14" fill="#004D90" />
      <text x="50" y="55" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontStyle="italic" textAnchor="middle">LOCTITE</text>
      <text x="50" y="67" fill="#E1000F" fontSize="5" fontWeight="900" textAnchor="middle">SUPER GLUE</text>
      <text x="50" y="76" fill="#1A1A1A" fontSize="4.5" fontWeight="800" textAnchor="middle">LIQUID CONTROL</text>
      <text x="50" y="86" fill="#004D90" fontSize="3.5" fontWeight="700" textAnchor="middle">FAST SET</text>
    </svg>
  );
}

export default ProductPackshot;
