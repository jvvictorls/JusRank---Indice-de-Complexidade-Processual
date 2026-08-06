interface Props {
  summary: string;
}

export default function AISummaryCard({
  summary,
}: Props) {
  return (
    <div className="rounded-xl border p-6 bg-white">

      <h3 className="font-semibold mb-5">
        Resumo da IA
      </h3>

      <div className="rounded-lg bg-violet-50 p-4">

        <p className="text-gray-600 text-sm leading-7">
          {summary}
        </p>

      </div>

      <button
        className="w-full mt-5 rounded-lg border py-2 hover:bg-gray-100 transition"
      >
        Copiar resumo
      </button>

    </div>
  );
}