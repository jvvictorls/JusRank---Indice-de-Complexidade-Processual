interface RadialProgressProps {
  score: number;
}

export default function RadialProgress({ score }: RadialProgressProps) {
  const radius = 70;
  const stroke = 12;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progressColor =
    score < 40 ? "#22c55e" : score < 70 ? "#eab308" : "#ef4444";

  const progress = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        {/* Fundo */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progresso */}
        <circle
          stroke={progressColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={`transition-all duration-700 br[]`}
        />
      </svg>

      {/* Número no centro */}
      <div className="absolute text-4xl font-bold text-orange-500">{score}</div>
    </div>
  );
}
