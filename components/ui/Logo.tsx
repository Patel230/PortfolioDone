"use client";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient circle */}
      <circle cx="256" cy="256" r="256" fill="url(#gradient)" />

      {/* 3D-like geometric shape */}
      <path
        d="M256 100 L400 200 L400 312 L256 412 L112 312 L112 200 Z"
        fill="url(#shapeGradient)"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinejoin="round"
      />

      {/* Inner accent shape */}
      <path
        d="M256 180 L340 230 L340 310 L256 360 L172 310 L172 230 Z"
        fill="rgba(255,255,255,0.2)"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Center dot/orb */}
      <circle cx="256" cy="256" r="40" fill="url(#orbGradient)" />
      <circle cx="256" cy="256" r="40" fill="rgba(255,255,255,0.3)" />
      <circle cx="256" cy="240" r="15" fill="rgba(255,255,255,0.8)" />

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0.3)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0.1)", stopOpacity: 1 }} />
        </linearGradient>

        <radialGradient id="orbGradient">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
        </radialGradient>
      </defs>
    </svg>
  );
}
