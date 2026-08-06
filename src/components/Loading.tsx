type LoadingProps = {
  message: string;
};
export default function Loading({ message }: LoadingProps) {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold">🧠 Analisando documento...</h2>
      <p className="mt-3 text-gray-500">{message}</p>
    </div>
  );
}
