import Header from "../components/Header";
import FileUpload from "../components/FileUpload";
import Button from "../components/Button";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{} | null>(null);

  //Function to handle the form submission
  const handleSubmittForm = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 4000));

    setResult({
      score: 78,
      parecer: "Alta complexidade processual",
      inconsistencias: [
        "Falta de documentos comprobatórios",
        "Inconsistência nas informações fornecidas",
      ],
    });
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-card p-12 shadow-sm">
          <Header />
          <FileUpload file={file} setFile={setFile} />
          <Button
            text="Enviar"
            disabled={!file}
            figure={<Sparkles className="mx-3" />}
            style="flex justify-center my-6 w-full rounded-lg px-6 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={() => handleSubmittForm()}
          />
        </div>
      </div>
    </main>
  );
}
