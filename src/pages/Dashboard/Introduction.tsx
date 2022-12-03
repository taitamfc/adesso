import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DashboardIntroductionScreen, HeartJournalIntroductionScreen, HeartChartIntroductionScreen, MyAdessoJourneyIntroductionScreen } from '../../components/Introduction/Screens/'

enum IntroductionScreen {
  Dashboard,
  HeartJournal,
  HeartChart,
  MyAdessoJourney,
}

export const Introduction = () => {
  const [screen, setScreen] = useState<IntroductionScreen>(IntroductionScreen.Dashboard)
  const navigate = useNavigate()

  const doneIntroduction = localStorage.getItem('doneIntroduction') ?? ''

  useEffect(() => {
    if (doneIntroduction && JSON.parse(doneIntroduction) === true) {
      navigate('/dashboard')
    }
  }, [])

  const handleClickNextScreen = useCallback((stepCurrent: IntroductionScreen) => {
    if (stepCurrent === IntroductionScreen.MyAdessoJourney) {
      localStorage.setItem('doneIntroduction', 'true')
      navigate('/dashboard')
    } else {
      setScreen(stepCurrent + 1)
    }
  }, [])

  switch (screen) {
    case IntroductionScreen.Dashboard:
      return <DashboardIntroductionScreen nextScreen={() => handleClickNextScreen(screen)} />
    case IntroductionScreen.HeartJournal:
      return <HeartJournalIntroductionScreen nextScreen={() => handleClickNextScreen(screen)} />
    case IntroductionScreen.HeartChart:
      return <HeartChartIntroductionScreen nextScreen={() => handleClickNextScreen(screen)} />
    case IntroductionScreen.MyAdessoJourney:
      return <MyAdessoJourneyIntroductionScreen nextScreen={() => handleClickNextScreen(screen)} />
    default:
      return <></>
  }
}
