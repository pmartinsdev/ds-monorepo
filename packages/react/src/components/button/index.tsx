import { HTMLAttributes } from "react"
import "./styles.css"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return <button {...props} type="button" className="button">{label}</button>
}
