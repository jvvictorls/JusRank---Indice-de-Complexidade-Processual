import type { AnalysisResult } from "../../types/AnalysisTypes";
import ComplexityCard from "./ComplexityCard";
import AISummaryCard from "./AiSummaryCard";
import InconsistenciesCard from "./InconsistenciesCard";
import MedicalInformationCard from "./MedicalInformationCard";
import MissingDocsCard from "./MissingDocsCard";
type Props = {
  result: AnalysisResult;
};

export default function Result({ result }: Props) {
  return (
    <div className=" flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3md:overflow-visible">
      <div className="min-w-[85%] snap-center md:min-w-0">
        <ComplexityCard
          level={result.complexityLevel}
          score={result.complexityScore}
        />
      </div>
      <div className="min-w-[85%] snap-center md:min-w-0">
        <MedicalInformationCard
          cids={result.cids}
          dates={result.importantDates}
          diagnostics={result.diagnostics}
        />
      </div>
      <div className="min-w-[85%] snap-center md:min-w-0">
        <MissingDocsCard documents={result.missingDocs} />
      </div>
      <div className="min-w-[85%] snap-center md:min-w-0">
        <InconsistenciesCard inconsistencies={result.inconsistencies} />
      </div>
      <div className="min-w-[85%] snap-center md:min-w-0">
        <AISummaryCard summary={result.summary} />
      </div>
    </div>
  );
}
