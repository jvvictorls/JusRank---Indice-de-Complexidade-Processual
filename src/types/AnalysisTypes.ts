export interface Inconsistency {
  id: number;
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface AnalysisResult {
  score: number;
  complexity: "Baixa" | "Média" | "Alta";
  inconsistencies: Inconsistency[];
}
