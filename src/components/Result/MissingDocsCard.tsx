interface Props {
  documents: string[];
}

export default function MissingDocsCard({ documents }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold mb-4">Documentos ausentes</h3>

      <ul className="space-y-2">
        {documents.map((doc) => (
          <li key={doc} className=" bg-red-50 p-3 rounded text-red-700">
            ⚠ {doc}
          </li>
        ))}
      </ul>
    </div>
  );
}
