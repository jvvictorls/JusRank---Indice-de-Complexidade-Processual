interface Inconsistency {
  type: string;
  description: string;
  severity: string;
}

interface Props {
  inconsistencies: Inconsistency[];
}

export default function InconsistenciesCard({ inconsistencies }: Props) {
  return (
    <div className="rounded-xl border p-6 bg-white">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold">Inconsistências</h3>

        <span className="bg-red-100 text-red-600 rounded-full px-2">
          {inconsistencies.length}
        </span>
      </div>

      <div className="space-y-5">
        {inconsistencies.map((item) => (
          <div key={item.type}>
            <div className="flex justify-between">
              <h4 className="font-medium">{item.type}</h4>

              <span className="text-sm">{item.severity}</span>
            </div>

            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
