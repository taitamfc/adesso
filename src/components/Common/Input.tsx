import { ChangeEvent } from "react"

type Props = {
  id?: string
  type: string
  name: string
  value?: string
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ id, type, name, value, placeholder, onChange }: Props) => {
  return (
    <input 
      className="input border-none rounded-none w-full h-input bg-white" 
      id={id} 
      type={type} 
      name={name} 
      value={value} 
      placeholder={placeholder} 
      onChange={onChange} 
    />
  )
}