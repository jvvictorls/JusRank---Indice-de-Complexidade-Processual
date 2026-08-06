export interface Inconsistency {
  id: number;
  type: string;
  description: string;
  severity: "Baixa" | "Média" | "Alta";
}

export interface AnalysisResult {
  complexityScore: number;
  complexityLevel: "Baixa" | "Média" | "Alta";
  inconsistencies: Inconsistency[];
  summary: string;
}
