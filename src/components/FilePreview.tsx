type fileViewProps = {
  file: File;
};
export default function filePreview({ file }: fileViewProps) {
  return (
    <div className="space-y-3 text-center">
      <h3 className="text-xl font-semibold text-text">{file.name}</h3>

      <p className="text-text-secondary">
        {(file.size / 1024 / 1024).toFixed(2)} MB
      </p>

      <span className="text-primary font-medium">
        Clique para trocar o arquivo
      </span>
    </div>
  );
}
