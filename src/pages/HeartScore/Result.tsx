import { useState, useMemo, useCallback } from "react";
import { HeartScoreResult } from "../../types/HeartScoreResult";
import { ResultContent } from "../../components/HeartScore/Result/";
import { Navigate } from "react-router-dom";

import { ResultData, ResultStatus } from "../../models/heartscore-result"

const arrStatus: ResultStatus[] = [ResultStatus.HIGH, ResultStatus.MEDIUM, ResultStatus.LOW]

const randomStatus = (): ResultStatus => {
  const random = Math.floor(Math.random() * 3)
  return arrStatus[random]
}

const dummyDataHeartScoreResultLow: ResultData = {
  totalScore: 45,
  totalStatus: ResultStatus.LOW,
  content: `
    This puts you in the <b class='text-color-low-risk'>Low-risk</b> category. We encourage you to embrace your health and well-being by starting the MyAdesso Learning Journey. Stay vital and fabulous by empowering yourself with how to continue living the most heart-healthy life you can! Congratulations. See you there!
  `,
  details: [
    { score: 5, status: randomStatus(), category: 'Tell Us about Yourself' },
    { score: 5, status: randomStatus(), category: 'Lifestyle Choices and How You Live Your Days' },
    { score: 5, status: randomStatus(), category: 'Your Feelings and Mental Health' },
    { score: 5, status: randomStatus(), category: 'Food Insecurity' },
    { score: 5, status: randomStatus(), category: 'Job Satisfaction' },
    { score: 5, status: randomStatus(), category: 'Past Medical History' },
    { score: 5, status: randomStatus(), category: 'Heart History' },
    { score: 5, status: randomStatus(), category: 'The Women Stuff' },
    { score: 5, status: randomStatus(), category: 'Your Family History' },
  ]
}

const dummyDataHeartScoreResultMedium: ResultData = {
  totalScore: 50,
  totalStatus: ResultStatus.MEDIUM,
  content: `
    This puts you in the <b class='text-color-medium-risk'>Moderate-risk</b> category. We are so happy to have you become part of the MyAdesso Learning Journey to help you empower yourself with information to address the issues that you can change. 
    <br/>We can help you reach your goals and ultimate wellness.  Come join us on this journey.
    <br/>
    <br/>We suggest you join our clinical program to have testing to create your own personalized diet, exercise, and stress management program. This will be created specifically for YOU.
    <br/>
    <br/><b>Call your doctor's office/human resources department/employee benefits to get enrolled. Can't wait for you to get started.</b>
  `,
  details: [
    { score: 50, status: randomStatus(), category: 'Tell Us about Yourself' },
    { score: 50, status: randomStatus(), category: 'Lifestyle Choices and How You Live Your Days' },
    { score: 50, status: randomStatus(), category: 'Your Feelings and Mental Health' },
    { score: 50, status: randomStatus(), category: 'Food Insecurity' },
    { score: 50, status: randomStatus(), category: 'Job Satisfaction' },
    { score: 50, status: randomStatus(), category: 'Past Medical History' },
    { score: 50, status: randomStatus(), category: 'Heart History' },
    { score: 50, status: randomStatus(), category: 'The Women Stuff' },
    { score: 50, status: randomStatus(), category: 'Your Family History' },
  ]
}

const dummyDataHeartScoreResultHigh: ResultData = {
  totalScore: 80,
  totalStatus: ResultStatus.HIGH,
  content: `
    This puts you in the <b class='text-color-high-risk'>High-risk</b> category. Don\'t worry...we want to make sure that you and your heart are okay!
    <br/>
    <br/><b>Call your doctor's office/human resources department/employee benefits to find a cardiologist on your plan.</b>
    <br/>
    <br/>Once you are evaluated, you can join our clinical program to have testing done to create your own personalized diet, exercise, and stress management program. This will be created specifically for YOU, as soon and we have the ok from the cardiologist.
    <br/>
    <br/>Bring your assessment with you so your doctor can see our concerns.
    <br/>In the meantime, you have become part of the MyAdesso Learning Journey to help you empower yourself with information to address the issues that you can change.
  `,
  details: [
    { score: 80, status: randomStatus(), category: 'Tell Us about Yourself' },
    { score: 80, status: randomStatus(), category: 'Lifestyle Choices and How You Live Your Days' },
    { score: 80, status: randomStatus(), category: 'Your Feelings and Mental Health' },
    { score: 80, status: randomStatus(), category: 'Food Insecurity' },
    { score: 80, status: randomStatus(), category: 'Job Satisfaction' },
    { score: 80, status: randomStatus(), category: 'Past Medical History' },
    { score: 80, status: randomStatus(), category: 'Heart History' },
    { score: 80, status: randomStatus(), category: 'The Women Stuff' },
    { score: 80, status: randomStatus(), category: 'Your Family History' },
  ]
}

const arrDummyData: ResultData[] = [dummyDataHeartScoreResultHigh, dummyDataHeartScoreResultMedium, dummyDataHeartScoreResultLow]

export const Result = () => {
  const [isRedirect, setIsRedirect] = useState<boolean>(false)
  const [dataResult, setDataResult] = useState<ResultData>(arrDummyData[Math.floor(Math.random() * 3)])

  const handleRedirect = useCallback(() => {setIsRedirect(true)},[setIsRedirect])

  const resultContent = useMemo(() => {
    return <ResultContent data={dataResult} onNextPage={handleRedirect} />
  }, [dataResult])

  return isRedirect ? <Navigate to="/welcome" replace={true} /> : <>{resultContent}</>
}