import type { ButtonType } from "../types/ButtonType"


export default function Button({text, style}: ButtonType) {
    return (
        <button
        className={style}
        >
            {text}
        </button>
    )
}