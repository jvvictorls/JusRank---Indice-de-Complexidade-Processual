import { FileUp, FileText } from "lucide-react";
import { useRef } from "react";
import FilePreview from "./FilePreview";
import type { FileUploadType } from "../types/FileUploadTypes";

export default function FileUpload({ file, setFile }: FileUploadType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFile(file);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="rounded-2xl border-2 border-dashed border-primary/40 bg-background p-12 transition-colors hover:border-primary cursor-pointer"
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          inputRef.current?.click();
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleInputChange}
      />
      {/* File upload content */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {file ? (
            <FileText className="h-8 w-8 text-primary" />
          ) : (
            <FileUp className="h-8 w-8 text-primary" />
          )}
        </div>

        {file ? (
          <div>
            <FilePreview file={file} />
          </div>
        ) : (
          <div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold text-text">
                Arraste o PDF da petição inicial aqui
              </h3>

              <p className="text-text-secondary">
                ou clique para selecionar o arquivo
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Send Button*/}
      <div className="mt-8 flex justify-center"></div>
    </div>
  );
}
