export enum ResultStatus {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export type DetailResultData = {
  category: string,
  score: number,
  status: ResultStatus
}

export type ResultData = {
  totalScore: number,
  totalStatus: ResultStatus
  content: string,
  details: DetailResultData[]
}