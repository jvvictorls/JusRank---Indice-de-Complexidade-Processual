import { BrainCircuit } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-6">
      {/* Ícone */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
        <BrainCircuit className="h-8 w-8 text-white" />
      </div>

      {/* Título */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          Índice de Complexidade Processual{" "}
          <span className="text-primary">(ICP)</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
          Envie a petição inicial para identificar possíveis inconsistências
          processuais e calcular o índice de complexidade do processo com apoio
          da IA.
        </p>
      </div>
    </header>
  );
}
