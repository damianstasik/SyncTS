export function StarryBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="100%" height="100%" fill="#0B0B1E" />
      {[...Array(200)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r={Math.random() * 1.5}
          fill="#FFFFFF"
          opacity={Math.random() * 0.7 + 0.3}
        />
      ))}
    </svg>
  );
}
