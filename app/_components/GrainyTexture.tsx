export default function GrainyTexture() {
  return (
    <svg className="gradient pointer-events-none fixed isolate z-50 h-full w-full bg-black mix-blend-soft-light">
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={0.8}
          numOctaves={4}
          stitchTiles="stitch"
        />
      </filter>
      <rect filter="url(#grain)" height="100%" width="100%" />
    </svg>
  );
}
