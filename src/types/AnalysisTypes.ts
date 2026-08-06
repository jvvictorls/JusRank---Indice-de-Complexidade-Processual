export interface Inconsistency {
  id: number;
  title: string;
  severity: "Baixa" | "Média" | "Alta";
}

export interface AnalysisResult {
  score: number;
  complexity: "Baixa" | "Média" | "Alta";
  inconsistencies: Inconsistency[];
}
