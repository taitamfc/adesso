import { useState, useMemo, useCallback } from 'react'
import { HeartChartContent } from '../../HeartChart'
import { ButtonCommon, ButtonStyles } from '../../Common/Button'
import { BoxText, ArrowType } from '../BoxText'

enum HeartChartStep {
  MyBeats,
  ActionsToComplete,
  RedeemYourBeats,
  ActionsCompleted,
  // MyTestResult,
  MyHeartScore,
  Completed,
}

type Props = {
  nextScreen: any
}

export const HeartChartIntroductionScreen = ({ nextScreen }: Props) => {
  const [step, setStep] = useState<HeartChartStep>(HeartChartStep.MyBeats)

  const handleNextStep = useCallback((stepCurent: HeartChartStep) => {
    setStep(stepCurent + 1)
  }, [])

  const contentHeartChartStep = useMemo(() => {
    switch (step) {
      case HeartChartStep.MyBeats:
        return <BoxText arrow={ArrowType.Left} className="mt-[280px]" text="Review your total beats." />

      case HeartChartStep.ActionsToComplete:
        return <BoxText arrow={ArrowType.Left} className="mt-[420px]" text="See how many beats you need to get to your next badge." />

      case HeartChartStep.RedeemYourBeats:
        return <BoxText arrow={ArrowType.Left} className="mt-[620px]" text="Track your next steps." />

      case HeartChartStep.ActionsCompleted:
        return <BoxText arrow={ArrowType.Left} className="mt-[780px]" text="Track your progress through the MyAdesso Learning Journey." />

      case HeartChartStep.MyHeartScore:
        return <BoxText arrow={ArrowType.Left} className="mt-[1280px]" text="Redeem points" />

      case HeartChartStep.Completed:
        return <BoxText className="mt-60" text="You completed the Heart Journal tour." plusPoint={5} />

      default:
        return <></>
    }
  }, [step])

  const buttonNext = useMemo(() => {
    return step === HeartChartStep.Completed ? (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="NEXT" onClick={nextScreen} />
    ) : (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="GOT IT! NEXT" onClick={() => handleNextStep(step)} />
    )
  }, [step, handleNextStep, nextScreen])

  return (
    <div className={`relative h-full w-full ${step === HeartChartStep.MyHeartScore && 'pb-40'}`}>
      <HeartChartContent />

      <div className="absolute top-[-74px] left-0 z-10 flex h-[calc(100%+74px)] w-full flex-col items-center space-y-4 bg-color-overlay bg-opacity-50 px-4 font-['Proxima_Nova']">
        {contentHeartChartStep}
        {buttonNext}
      </div>
    </div>
  )
}
