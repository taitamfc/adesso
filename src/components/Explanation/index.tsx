import { ButtonCommon, ButtonStyles } from '../Common/Button'

import { CurrentBeats } from './CurrentBeats'
import { ExplanationItem, ExplanationType } from './ExplanationItem'

const dummyActionList: ExplanationType[] = [
  {
    name: 'Completing this onboarding journey',
    unit: 'beats',
    beats: 20,
  },
  {
    name: 'Completing Learning Journey Sessions',
    unit: 'beats/session',
    beats: 10,
  },
  {
    name: 'Completing a “Go Deeper” Session',
    unit: 'beats/session',
    beats: 2,
  },
  {
    name: 'Logging a daily action',
    unit: 'beats/action',
    beats: 5,
  },
  {
    name: 'Achieving a 5 day streak',
    unit: 'beats bonus',
    beats: 5,
  },
  {
    name: 'Completing Half of the Adesso Learning Journey',
    unit: 'beats bonus',
    beats: 25,
  },
  {
    name: 'Completing the Full Adesso Learning Journey Path',
    unit: 'beats bonus',
    beats: 50,
  },
]

type Props = {
  nextScreen: () => void
}

export const ExplanationContent = ({ nextScreen }: Props) => {
  return (
    <div className="space-y-5 px-5 py-[35px] font-['Proxima_Nova']">
      <h1 className="font-['Butler'] text-ma-h1">Fantastic! You just earned your first round of Beats.</h1>

      <CurrentBeats />

      <p className="text-[20px] font-semibold leading-[1.2]">
        During this journey, you will receive points (we call them beats) for the progress you make. These beats help you see your progress on your journey in a tangible way. You’ll receive beats for
        various actions that you take, including:
      </p>

      <div className="space-y-2">
        {dummyActionList.map((action, index) => {
          return (
            <div key={`explanation-${index}`} className="space-y-2">
              {index > 0 && <div className="h-6 w-5 bg-[url('assets/images/icon/i-arrow__down.svg')] bg-[length:auto_100%] bg-center bg-no-repeat" />}
              <ExplanationItem item={action} />
            </div>
          )
        })}
      </div>

      <p className="text-[20px] font-semibold leading-[1.2]">
        Next, we will give you a tour of the MyAdesso platform to help explain these specific areas and help you achieve the rest of your onboarding beats.
      </p>

      <div className="flex justify-center">
        <ButtonCommon style={ButtonStyles.Dark} width="w-[147px]" height="h-[53px]" text="Next" onClick={nextScreen} />
      </div>
    </div>
  )
}
