export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100px"
      height="100px"
    >
      <defs>
        {/* Gradient for the letters */}
        <linearGradient
          id="gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0096db" />
          <stop offset="100%" stopColor="#004d40" />
        </linearGradient>
      </defs>
      {/* Outer circle with animation */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#0096db"
        strokeWidth="5"
        strokeDasharray="502.65"
        strokeDashoffset="502.65"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="502.65"
          to="0"
          dur="2s"
          fill="freeze"
        />
      </circle>
      {/* Letter O with animation */}
      <path
        d="
          M100,40
          a60,60 0 1,0 0,120
          a60,60 0 1,0 0,-120
        "
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeDasharray="377"
        strokeDashoffset="377"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="377"
          to="0"
          dur="2s"
          begin="0.5s"
          fill="freeze"
        />
      </path>
      {/* Complete Letter M with middle "V" and animation */}
      <path
        d="
          M70,140
          L85,80
          L100,110
          L115,80
          L130,140
          L120,140
          L100,100
          L80,140
          Z
        "
        fill="url(#gradient)"
        stroke="url(#gradient)"
        strokeWidth="1"
        strokeDasharray="180"
        strokeDashoffset="180"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="180"
          to="0"
          dur="2s"
          begin="1s"
          fill="freeze"
        />
      </path>
      {/* Star on top */}
      <path
        d="
          M100 20 
          L108 40 
          L125 40 
          L112 50 
          L118 70 
          L100 60 
          L82 70 
          L88 50 
          L75 40 
          L92 40 
          Z
        "
        fill="#f3c518"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.5s"
          begin="2s"
          fill="freeze"
        />
      </path>
    </svg>
  );
}
