import { useState, useMemo, useCallback } from 'react'
import { DashboardContent } from '../../Dashboard'
import { ButtonCommon, ButtonStyles } from '../../Common/Button'
import { BoxText, ArrowType } from '../BoxText'

enum DashboardStep {
  MyNow,
  MyBeats,
  MyHeartActions,
  GoDeeper,
  Completed,
}

type Props = {
  nextScreen: any
}

export const DashboardIntroductionScreen = ({ nextScreen }: Props) => {
  const [step, setStep] = useState<DashboardStep>(DashboardStep.MyNow)

  const handleNextStep = useCallback((stepCurent: DashboardStep) => {
    setStep(stepCurent + 1)
  }, [])

  const contentDashboardStep = useMemo(() => {
    switch (step) {
      case DashboardStep.MyNow:
        return (
          <BoxText
            arrow={ArrowType.Left}
            className="mt-60"
            text="Here is your Now!. Remember, it’s your mantra. Every time you log back in, you’ll see it, visualize it and celebrate it! Click it any time to update it."
          />
        )

      case DashboardStep.MyBeats:
        return (
          <BoxText
            arrow={ArrowType.Right}
            className="mt-[440px]"
            text="Here is your heartbeat and your heart level so you’ll always how far you’ve come and what you need to get to the next level. "
          />
        )

      case DashboardStep.MyHeartActions:
        return (
          <BoxText
            arrow={ArrowType.Left}
            className="mt-[600px]"
            text="See the first goal that you picked? Your heart actions summarize your daily activities based on the goals you set for yourself. Click them to record your actions."
          />
        )

      case DashboardStep.GoDeeper:
        return <BoxText arrow={ArrowType.Left} className="mt-[1100px]" text="Here you can click to your next MyAdesso journey or browse Go Deepers that support your heart healthy life." />

      case DashboardStep.Completed:
        return <BoxText className="mt-60" text="You completed the Dashboard tour." plusPoint={5} />

      default:
        return <></>
    }
  }, [step])

  const buttonNext = useMemo(() => {
    return step === DashboardStep.Completed ? (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="NEXT" onClick={nextScreen} />
    ) : (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="GOT IT! NEXT" onClick={() => handleNextStep(step)} />
    )
  }, [step, handleNextStep, nextScreen])

  return (
    <div className={`relative h-full w-full ${step === DashboardStep.GoDeeper && 'pb-40'}`}>
      <DashboardContent myNowData="To be fit and vital and play with my son until I’m 95!" score={60} isIntroduction />

      <div className="absolute top-[-74px] left-0 z-10 flex h-[calc(100%+74px)] w-full flex-col items-center space-y-4 bg-color-overlay bg-opacity-50 px-4 font-['Proxima_Nova']">
        {contentDashboardStep}
        {buttonNext}
      </div>
    </div>
  )
}
