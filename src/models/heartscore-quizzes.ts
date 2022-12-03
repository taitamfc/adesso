export enum OptionTypes {
  Input = 'input',
  InputNumber = 'input-number',
  InputEmail = 'input-email',
  Radio = 'radio',
  RadioSquare = 'radio-square',
  Checkbox = 'checkbox'
}

export type OptionValue = string | number

export type QuestionOption<T extends OptionValue> = {
  value: T,
  label: string,
  example?: string
}

export type Parent<T extends OptionValue> = {
  value: T,
  name: string,
}

export type QuizzesIntroduction = {
  title?: string,
  description: string
}

export type QuizzesQuestion = {
  name: string
  type: OptionTypes
  question?: string
  value?: string
  exampleName?: string
  isRequired?: boolean
  options?: QuestionOption<OptionValue>[]
  parent?: Parent<OptionValue>
}

export type QuizzesData = {
  introduction: QuizzesIntroduction
  titleProgess?: string
  questions?: QuizzesQuestion[]
}