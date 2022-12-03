import { useMemo, ChangeEvent } from "react"

import { QuizzesQuestion } from "../../../../models/heartscore-quizzes"

type Props = {
  question: QuizzesQuestion
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const QuizzesCheckboxs = ({ question, onChange }: Props) => {
  const options = useMemo(() => {
    return question && question.options ? question.options.map((option, index) => {
      const idCheckbox = `${question.name}-${index}`
      return (
        <div key={`quizzesCheckboxs-${index}`} className="flex text-[17x] leading-[21px]">
          <input id={idCheckbox} type="checkbox" name={question.name} className="hidden peer" value={option.value} onChange={onChange} />
          
          <label htmlFor={idCheckbox} className="w-[18px] h-[18px] mt-[1px] mr-2 flex justify-center items-center rounded border-2 bg-white peer-checked:bg-color-checkbox border-[#979797] peer-checked:border-color-checkbox">
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10.42L0 5.42L1.41 4.01L5 7.59L12.59 0L14 1.42L5 10.42Z" fill="white"/>
            </svg>
          </label>

          <label htmlFor={idCheckbox} className="flex-1">
            {option.label}
          </label>

          { question.exampleName && option.example ? <div className="w-[200px]">{option.example}</div> : null }
        </div>
      )
    }) : null
  }, [question])

  const header = useMemo(() => {
    return question.exampleName ? (
      <div className="flex text-[15x] leading-[21px] uppercase font-bold">
        <div className="flex-1">{question.exampleName}</div>
        <div className="w-[200px] text-[15x] leading-[21px] uppercase font-bold">EXAMPLES</div>
      </div>
    ) : null
  }, [question.exampleName])

  return (
    <>
      {header}
      {options}
    </>
  )
}