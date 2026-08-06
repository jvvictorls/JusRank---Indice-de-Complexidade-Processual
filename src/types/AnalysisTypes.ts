export interface Inconsistency {
  id: number;
  type: string;
  description: string;
  severity: "Baixa" | "Média" | "Alta";
  weight: number;
}

export interface AnalysisResult {
  cids: string[];
  diagnostics: string[];
  importantDates: string[];
  missingDocs: string[];
  complexityScore: number;
  complexityLevel: "Baixa" | "Média" | "Alta";
  inconsistencies: Inconsistency[];
  summary: string;
}
