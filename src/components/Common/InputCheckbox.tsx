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
}

export const FormCheckbox = ({ id, name, value, label, checked, readOnly, disabled, onChange }: Props) => {
  const opacity = readOnly ? 'opacity-60' : ''
  return (
    <div className="space-x-2 flex items-center">
      <input 
        id={id || `${name}-${label}`} 
        type="checkbox" 
        className={`w-[18px] h-[18px] rounded accent-color-checkbox ${opacity}`} 
        value={value} 
        checked={checked}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={id || `${name}-${label}`} className="text-[17x] leading-[1.235] font-semibold text-white">
        {label}
      </label>
    </div>
  )
}