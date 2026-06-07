
export default function DeckleDivider({ className = "" }) {
  return (
    <div className={`relative w-full h-8 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
      >
        <path
          d="M0,16 C40,12 80,20 120,14 C160,8 200,22 240,16 C280,10 320,20 360,15 C400,10 440,22 480,14 C520,6 560,24 600,16 C640,8 680,22 720,15 C760,8 800,20 840,16 C880,12 920,22 960,14 C1000,6 1040,24 1080,16 C1120,8 1160,20 1200,16"
          stroke="hsl(33,26%,53%)"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}