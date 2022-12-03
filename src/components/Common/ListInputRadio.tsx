import { ChangeEvent } from "react"

import { FormRadio } from './InputRadio'

type Props = {
  name: string
  labels: string[]
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FormListRadio = ({ name, labels, onChange}: Props) => {
  return (
    <div role="group" aria-labelledby={name} className="space-y-3">
      {labels && labels.map((label, index) => {
        return (
          <FormRadio
            key={`${name}-radio-${index}`}
            id={`${name}-radio-${index}`}
            name={name}
            label={label}
            onChange={onChange}
          />
        )
      })}
    </div>
  )
}