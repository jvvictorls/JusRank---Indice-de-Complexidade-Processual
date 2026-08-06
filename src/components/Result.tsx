import type { AnalysisResult } from "../types/AnalysisTypes";

type Props = {
  result: AnalysisResult;
};

const severityColor = {
  Alta: "bg-red-500",
  Média: "bg-yellow-500",
  Baixa: "bg-green-500",
};

export default function Result({ result }: Props) {
  return (
    <div className="mt-8 space-y-4">
      <div>
        <h3 className="font-semibold">Score</h3>
        <p>{result.score}</p>
      </div>

      <div>
        <h3 className="font-semibold">Parecer</h3>
        <p
          className={`rounded-full px-3 py-1 text-sm text-white ${
            severityColor[result.complexity]
          }`}
        >
          Complexidade: {result.complexity}
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Inconsistências</h3>

        <ul className="space-y-3">
          {result.inconsistencies.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <span>{item.title}</span>

              <span
                className={`rounded-full px-3 py-1 text-sm text-white ${
                  severityColor[item.severity]
                }`}
              >
                {item.severity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
