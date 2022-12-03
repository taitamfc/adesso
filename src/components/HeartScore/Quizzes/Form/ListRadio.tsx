import { useMemo, ChangeEvent, useCallback } from "react"

import { QuizzesQuestion } from "../../../../models/heartscore-quizzes"

type Props = {
  value?: string
  isSquare?: boolean
  question: QuizzesQuestion
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const QuizzesRadios = ({ isSquare = false, question, onChange }: Props) => {
  const isDisplayRow = !isSquare && !question.exampleName

  const icon = (idCheckbox: string) => {
    return (
      <label 
        htmlFor={idCheckbox} 
        className={`mt-[1px] mr-2 flex justify-center items-center border-2 bg-white peer-checked:bg-color-checkbox border-[#979797] peer-checked:border-color-checkbox ${isSquare ? 'w-[18px] h-[18px] rounded' : 'w-5 h-5 rounded-full'}`}
      >
        { isSquare ? (
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10.42L0 5.42L1.41 4.01L5 7.59L12.59 0L14 1.42L5 10.42Z" fill="white"/>
        </svg>
        ) : <div className="w-4 h-4 border-[3px] rounded-full border-white" /> }
      </label>
    )
  }

  const options = useMemo(() => {
    return question && question.options ? question.options.map((option, index) => {
      const idCheckbox = `${question.name}-${index}`
      return (
        <div key={`quizzesrRadios-${index}`} className={`flex text-[17x] leading-[21px] ${isDisplayRow ? 'mr-7' : ''}`}>
          <input id={idCheckbox} type="radio" name={question.name} className="hidden peer" value={`${option.value}`} onChange={onChange} />
          
          { icon(idCheckbox) }

          <label htmlFor={idCheckbox} className={isDisplayRow ? '' : 'flex-1'}>
            {option.label}
          </label>

          { question.exampleName && option.example ? <div className="w-[200px]">{option.example}</div> : null }
        </div>
      )
    }) : null
  }, [question, onChange])

  return (
    <div role="group" aria-labelledby={question.name} className={isDisplayRow ? 'flex flex-wrap' : 'space-y-5'}>
      {
        question.exampleName ? (
          <div className="flex text-[15x] leading-[21px] uppercase font-bold">
            <div className="flex-1">{question.exampleName}</div>
            <div className="w-[200px] text-[15x] leading-[21px] uppercase font-bold">EXAMPLES</div>
          </div>
        ) : null
      }
      {options}
    </div>
  )
}