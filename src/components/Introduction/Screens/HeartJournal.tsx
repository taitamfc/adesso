import { useState, useMemo, useCallback } from 'react'
import { HeartJournalContent } from '../../HeartJournal'
import { ButtonCommon, ButtonStyles } from '../../Common/Button'
import { BoxText, ArrowType } from '../BoxText'

enum HeartJournalStep {
  MyGoals,
  MyData,
  Completed,
}

type Props = {
  nextScreen: any
}

export const HeartJournalIntroductionScreen = ({ nextScreen }: Props) => {
  const [step, setStep] = useState<HeartJournalStep>(HeartJournalStep.MyGoals)

  const handleNextStep = useCallback((stepCurent: HeartJournalStep) => {
    setStep(stepCurent + 1)
  }, [])

  const contentHeartJournalStep = useMemo(() => {
    switch (step) {
      case HeartJournalStep.MyGoals:
        return <BoxText arrow={ArrowType.Left} className="mt-[520px]" text="Select and repriotize the goals and actions that you want to focus on." />

      case HeartJournalStep.MyData:
        return <BoxText arrow={ArrowType.Left} className="mt-[780px]" text="Review past journals using the calendar function." />

      case HeartJournalStep.Completed:
        return <BoxText className="mt-60" text="You completed the Heart Journal tour." plusPoint={5} />

      default:
        return <></>
    }
  }, [step])

  const buttonNext = useMemo(() => {
    return step === HeartJournalStep.Completed ? (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="NEXT" onClick={nextScreen} />
    ) : (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="GOT IT! NEXT" onClick={() => handleNextStep(step)} />
    )
  }, [step, handleNextStep, nextScreen])

  return (
    <div className="relative h-full w-full">
      <HeartJournalContent />

      <div className="absolute top-[-74px] left-0 z-10 flex h-[calc(100%+74px)] w-full flex-col items-center space-y-4 bg-color-overlay bg-opacity-50 px-4 font-['Proxima_Nova']">
        {contentHeartJournalStep}
        {buttonNext}
      </div>
    </div>
  )
}
