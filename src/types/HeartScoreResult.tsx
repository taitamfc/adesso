export type HeartScoreResult = {
    score: number,
    text: string,
    detail: HeartScoreCategoryScore[]
}

type HeartScoreCategoryScore = {
    category: string,
    score: number
}