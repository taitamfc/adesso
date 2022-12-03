import { useState, useEffect, useCallback, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Wrapper, ButtonCommon, ButtonStyles, ErrorMessage } from "../../Common"
import { ProgressBar } from "./ProgressBar"
import { QuizzesCheckboxs, QuizzesRadios, QuizzesInput } from "./Form"
import { QuizzesData, QuizzesIntroduction, QuizzesQuestion, OptionTypes } from "../../../models/heartscore-quizzes"

const introductionFirstView = {
  description: `
    When you take care of yourself and focus on self-care, you address those parts of your life that you can control and truly have an impact. The more you empower yourself to create wellness in those areas of your life that you can, the more you will live with energy, vitality and overall wellbeing. 
    <br /><br />We know that if you live this way, you will prevent the number one killer of all women, heart disease. 1 in 3 women will die of heart disease, 70% of the time a woman doesn\’t even know that she is sick and 80% of the time heart disease is preventable. 
    <br /><br />It takes decades to develop, so the sooner we figure out if you are at risk, the sooner we can do something about it. 
    <br /><br />The time is NOW.... Let’s do this!
  `
}

type Props = {
  dataQuizzes: QuizzesData[],
  totalPage: number,
  isLoading?: boolean,
  success?: boolean
  isError?: boolean,
  errorMessage?: string,
  onFinished: () => void,
  onSubmit: (params: QuizzesData[]) => void
}

type FormikOptions<T> = {
  [key: string]: T
}

export const QuizzesContent = ({ dataQuizzes, totalPage, success, isLoading, isError, errorMessage, onSubmit, onFinished }: Props) => {
  const [isShowError, setIsShowError] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [dataIntroduction, setDataIntroduction] = useState<QuizzesIntroduction>(introductionFirstView)
  const [titleProgess, setTitleProgess] = useState<string | undefined>(undefined)
  const [dataQuestions, setDataQuestions] = useState<QuizzesQuestion[]>(dataQuizzes[0]?.questions || [])
  const [isProgressIntroduction, setIsProgressIntroduction] = useState<boolean>(true)

  const formiks = dataQuizzes.map((dataQuizze) => {
    const arrayInitialValues = Array.from(new Map(dataQuizze.questions?.map((question) => [question.name, ''])).entries())
    const initialValues = arrayInitialValues?.reduce((obj: FormikOptions<string>, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {})

    const arrayValidationSchema = Array.from(new Map(dataQuizze.questions?.filter((question) => question.isRequired).map((question) => [question.name, question])).entries())
    const validationSchema = arrayValidationSchema ? Yup.object(arrayValidationSchema.reduce((obj: FormikOptions<any>, [key, question]) => {
      obj[key] = question.type === OptionTypes.InputEmail || question.type === OptionTypes.Input || question.type === OptionTypes.InputNumber
        ? Yup.string().required("Field is required")
        : Yup.number().required("Field is required")

      return obj;
    }, {})) : undefined

    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: () => {
        setIsShowError(false)
        handleNextPage(currentPage, true)
      }
    })

    return formik
  })
  let currentFormik = formiks[currentPage - 1] || formiks[0]

  useEffect(() => {
    console.info('Page:', currentPage)

    setDataIntroduction(currentPage > 0 ? dataQuizzes[currentPage - 1].introduction : introductionFirstView)
    setTitleProgess(currentPage > 0 ? dataQuizzes[currentPage - 1]?.titleProgess : undefined)
    setDataQuestions(currentPage > 0 ? (dataQuizzes[currentPage - 1]?.questions || []) : [])
    currentFormik = formiks[currentPage - 1] || formiks[0]
  }, [currentPage, setDataIntroduction, setTitleProgess, setDataQuestions])

  const handleNextPage = useCallback((page: number, isNext: boolean  = false): void => {
    if(success) {
      setCurrentPage(page + 1)
      setIsProgressIntroduction(true)
      onFinished()
      return
    }
    if (isNext) {
      setIsShowError(false)
      setIsProgressIntroduction(true)
      
      page === totalPage ? onSubmit(dataQuizzes) : setCurrentPage(page + 1)
      return
    } 
    
    if (!isProgressIntroduction) {
      setIsShowError(true)
      currentFormik.handleSubmit()
      return
    }

    if(page < 1) { setCurrentPage(page + 1) }
    setIsProgressIntroduction(page < 1)
    return
  }, [success, totalPage, isProgressIntroduction, currentFormik, setCurrentPage, setIsShowError, setIsProgressIntroduction, onSubmit, onFinished])

  const handlePrevPage = useCallback((page: number):void => {
    setIsShowError(false)

    if(!isProgressIntroduction) {
      setIsProgressIntroduction(true)
      return
    }

    if(page > 1) { setIsProgressIntroduction(false) }
    setCurrentPage(page - 1)
    return
  }, [isProgressIntroduction, setIsShowError, setCurrentPage, setIsProgressIntroduction])

  const progressIntroduction = useMemo(() => {
    const finishedScreen = (
      <>
        <h1 className="text-[24px] leading-[1.6667] font-semibold text-center">
          That’s it! <br />You’ve finished. 
        </h1>
        <p className="text-[17x] leading-[1.235] font-semibold text-center">
          Check your email for your results and the action steps you can take next. Be sure to check spam. 
          <br /><br />If you have any problems contact healthteam@heart-tech.health.
        </p>
      </>
    )

    return success ? finishedScreen : (
      <>
        {dataIntroduction.title ? <h1 className="text-[24px] leading-[1.6667] font-semibold">{dataIntroduction.title}</h1> : null}
        <p className="text-[17x] leading-[1.235] font-semibold" dangerouslySetInnerHTML={{ __html: dataIntroduction.description }} />
      </>
    )
  }, [success, dataIntroduction])

  const progressQuestions = useMemo(() => {
    const questions = !dataQuestions && !currentFormik ? null : dataQuestions.map((q, index) => {
      let field: JSX.Element | undefined = undefined
      let isRender: boolean = true

      if (q.parent) {
        isRender = currentFormik.values[q.parent.name] === q.parent.value
      }

      if (!isRender) return undefined

      switch (q.type) { 
        case OptionTypes.RadioSquare:
        case OptionTypes.Radio: { 
          field = <QuizzesRadios question={q} isSquare={q.type === OptionTypes.RadioSquare} value={currentFormik.values[q.name]} onChange={currentFormik.handleChange} />
          break
        }

        case OptionTypes.Checkbox: { 
          field = <QuizzesCheckboxs question={q} onChange={currentFormik.handleChange} />
          break
        }

        case OptionTypes.Input:
        case OptionTypes.InputNumber:
        case OptionTypes.InputEmail: { 
          field = <QuizzesInput question={q} onChange={currentFormik.handleChange} />
          break
        }
      }

      return (
        <div key={`question-wrapper-${index}`} className="space-y-5 pb-2">
          {q.question ? <h2 className="text-[17x] leading-[21px] font-bold" dangerouslySetInnerHTML={{__html: q.question}} /> : null}
          {field}
          {isShowError && currentFormik.errors[q.name] && <ErrorMessage text={currentFormik.errors[q.name]} />}
        </div>
      )
    })

    return currentFormik ? (
      <form className="space-y-5" onSubmit={() => currentFormik.handleSubmit()}>
        {titleProgess ? <h1 className="text-[24px] leading-[1.6667] font-semibold">{titleProgess}</h1> : null}
        {questions}
      </form>
    ) : null
  }, [currentFormik, isShowError, currentPage, titleProgess, dataQuestions])

  const quizzesContent = useMemo(() => {
    const background = isProgressIntroduction ? `bg-fixed bg-center bg-no-repeat bg-cover bg-heartscore-quizze-${(success && '10') || currentPage}` : 'bg-white'

    return (
      <Wrapper background={background}>
        <div className={'hidden bg-heartscore-quizze-0'} />
        <div className={'hidden bg-heartscore-quizze-1'} />
        <div className={'hidden bg-heartscore-quizze-2'} />
        <div className={'hidden bg-heartscore-quizze-3'} />
        <div className={'hidden bg-heartscore-quizze-4'} />
        <div className={'hidden bg-heartscore-quizze-5'} />
        <div className={'hidden bg-heartscore-quizze-6'} />
        <div className={'hidden bg-heartscore-quizze-7'} />
        <div className={'hidden bg-heartscore-quizze-8'} />
        <div className={'hidden bg-heartscore-quizze-9'} />
        <div className={'hidden bg-heartscore-quizze-10'} />

        <div className="min-h-full flex flex-col justify-between py-3 space-y-5">
          <div className={`space-y-8 ${isProgressIntroduction ? '' : 'text-black'}`}>
            {0 < currentPage && !success && isProgressIntroduction ? <ProgressBar totalPage={totalPage} currentPage={currentPage} /> : null}

            <div className="space-y-5">
              { isProgressIntroduction ? progressIntroduction : progressQuestions }
            </div>
          </div>

          <div className="w-full flex justify-center space-x-2">
            {0 < currentPage && currentPage <= totalPage ? <div><ButtonCommon style={isProgressIntroduction ? ButtonStyles.Light : ButtonStyles.Dark} width="w-[147px]" height="h-[53px]" text="Back" onClick={() => handlePrevPage(currentPage)} /></div> : null}
            <div><ButtonCommon style={isProgressIntroduction ? ButtonStyles.Light : ButtonStyles.Dark} width="w-[147px]" height="h-[53px]" text="Next" onClick={() => handleNextPage(currentPage)} /></div>
          </div>
        </div>
      </Wrapper>
    )
  }, [success, currentPage, totalPage, isProgressIntroduction, progressIntroduction, progressQuestions, handlePrevPage, handleNextPage])

  return <>{quizzesContent}</>
}