import type { ButtonType } from "../types/ButtonType";

export default function Button({ text, style, figure, disabled, onClick }: ButtonType) {
  return (
    <button className={style} disabled={disabled} onClick={onClick}>
      {figure}
      {text}
    </button>
  );
}
