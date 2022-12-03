import { ChangeEvent } from "react"

type Props = {
  id?: string
  name?: string
  value?: string
  label?: string
  readOnly?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSetValue?: (value:string) => void
}

export const FormRadio = ({ id, name, value, label, checked, readOnly, disabled, onChange }: Props) => {
  return (
    <div className="flex space-x-2 items-center">
      <input 
        id={id || name} 
        name={name}
        type="radio" 
        className="w-5 h-5 rounded accent-color-checkbox"
        value={label} 
        checked={checked}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={id || name} className="text-[17x] leading-[1.235] text-white">
        {label}
      </label>
    </div>
  )
}