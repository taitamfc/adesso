import { useState, useMemo, useCallback } from 'react'
import { MyAdessoJourneyContent } from '../../MyAdessoJourney'
import { ButtonCommon, ButtonStyles } from '../../Common/Button'
import { BoxText, ArrowType } from '../BoxText'

enum MyAdessoJourneyStep {
  Done,
  Current,
  Lock,
  Completed,
}

type Props = {
  nextScreen: any
}

export const MyAdessoJourneyIntroductionScreen = ({ nextScreen }: Props) => {
  const [step, setStep] = useState<MyAdessoJourneyStep>(MyAdessoJourneyStep.Done)

  const handleNextStep = useCallback((stepCurent: MyAdessoJourneyStep) => {
    setStep(stepCurent + 1)
  }, [])

  const contentMyAdessoJourneyStep = useMemo(() => {
    switch (step) {
      case MyAdessoJourneyStep.Done:
        return <BoxText className="mt-[520px]" text="Take sessions focused on what your heart needs." />

      case MyAdessoJourneyStep.Current:
        return <BoxText className="mt-[780px]" text="Track your progress through each session." />

      case MyAdessoJourneyStep.Lock:
        return <BoxText className="mt-[780px]" text="Watch videos and follow along with podcasts." />

      case MyAdessoJourneyStep.Completed:
        return <BoxText className="mt-60" text="You completed the Heart Journal tour." plusPoint={5} />

      default:
        return <></>
    }
  }, [step])

  const buttonNext = useMemo(() => {
    return step === MyAdessoJourneyStep.Completed ? (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="NEXT" onClick={nextScreen} />
    ) : (
      <ButtonCommon style={ButtonStyles.Introduction} width="w-[167px]" height="h-[51px]" text="GOT IT! NEXT" onClick={() => handleNextStep(step)} />
    )
  }, [step, handleNextStep, nextScreen])

  return (
    <div className="relative h-full w-full">
      <MyAdessoJourneyContent />

      <div className="absolute top-[-74px] left-0 z-10 flex h-[calc(100%+74px)] w-full flex-col items-center space-y-4 bg-color-overlay bg-opacity-50 px-4 font-['Proxima_Nova']">
        {contentMyAdessoJourneyStep}
        {buttonNext}
      </div>
    </div>
  )
}
