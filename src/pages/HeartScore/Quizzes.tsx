import { useCallback, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";

import { QuizzesContent } from "../../components/HeartScore/Quizzes";
import { QuizzesData } from "../../models/heartscore-quizzes"
import { Results, PostResult } from "../../models/result-type"

import { getHearscoreQuizzes } from "../../lib/request/get-heartscore-quizzes"

export const Quizzes = () => {
  const [isRedirect, setIsRedirect] = useState<boolean>(false)
  const [getDataResult, setGetDataResult] = useState<Results<QuizzesData[]>>(getHearscoreQuizzes())
  const [postDataResult, setPostDataResult] = useState<PostResult>({ isLoading: false })

  const handleSubmit = useCallback((params?: QuizzesData[]): void => {
    console.info('handleSubmit', params)
    setPostDataResult({
      isLoading: false,
      success: true
    })
  },[setPostDataResult])

  const handleFinished = useCallback(() => {
    setIsRedirect(true)
  }, [setIsRedirect])

  const quizzesContent = useMemo(() => {
    const { success, data } = getDataResult

    return success && data ? <QuizzesContent success={postDataResult.success} dataQuizzes={data} totalPage={data.length} onSubmit={handleSubmit} onFinished={handleFinished} /> : null
  },[getDataResult, postDataResult, handleSubmit, handleFinished])

  return isRedirect ? <Navigate to="/heart-score/result" replace={true} /> : quizzesContent
}