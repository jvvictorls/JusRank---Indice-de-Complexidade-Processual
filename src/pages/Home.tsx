import Header from "../components/Header";
import FileUpload from "../components/FileUpload";
import Button from "../components/button";
import Loading from "../components/Loading";
import Result from "../components/Result";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import type { AnalysisResult } from "../types/AnalysisTypes";
import { analyzeInitialPetition } from "../services/analyze.service";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("");

  //Function to handle the form submission
  const handleSubmittForm = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const { data } = await analyzeInitialPetition(file);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-border bg-card p-12 shadow-sm">
          <Header />
          <FileUpload file={file} setFile={setFile} />
          <Button
            text="Enviar"
            disabled={!file || loading}
            figure={<Sparkles className="mx-3" />}
            style=" cursor-pointer flex justify-center my-6 w-full rounded-lg px-6 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={handleSubmittForm}
          />
          {loading && <Loading message={loadingMessage} />}
          {result && <Result result={result} />}
        </div>
      </div>
    </main>
  );
}
