import RadialProgress from "./RadialProgress";

interface Props {
  score: number;
  level: string;
}

export default function ComplexityCard({ score, level }: Props) {
  return (
    <div className="rounded-xl border p-6 shadow-sm bg-white">
      <h3 className="font-semibold mb-6">Índice de Complexidade</h3>

      <div className="flex justify-center">
        <RadialProgress score={score} />
      </div>

      <div className="text-center mt-5">
        <span className="rounded-full bg-orange-100 px-4 py-2 text-orange-600 font-medium">
          Complexidade: {level}
        </span>
      </div>
    </div>
  );
}
