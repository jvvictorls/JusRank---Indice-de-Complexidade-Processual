interface Props {
  cids: string[];
  diagnostics: string[];
  dates: string[];
}

export default function MedicalInformationCard({ cids, diagnostics, dates }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold mb-4">Informações identificadas</h3>

      <p>
        <strong>CIDs:</strong> {cids.join(", ")}
      </p>

      <p>
        <strong>Diagnósticos:</strong> {diagnostics.join(", ")}
      </p>

      <p>
        <strong>Datas:</strong>
      </p>

      <ul>
        {dates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
}
