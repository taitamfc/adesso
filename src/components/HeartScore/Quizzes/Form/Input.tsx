import { ChangeEvent, useMemo } from "react"

import { QuizzesQuestion, OptionTypes } from "../../../../models/heartscore-quizzes"

type Props = {
  value?: string
  question: QuizzesQuestion
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const QuizzesInput = ({ value, question, onChange }: Props) => {
  const type = question.type === OptionTypes.InputEmail ? 'email' : 'text'

  const input = useMemo(() => {
    return (
      <input
        type={type}
        className="input border-none rounded-none w-full h-input bg-color-pink-textarea"
        id={question.name}
        name={question.name}
        value={value}
        onChange={onChange}
      />
    )
  }, [value, onChange])

  return <>{input}</>
}