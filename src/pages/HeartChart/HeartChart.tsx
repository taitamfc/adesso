import { Component } from 'react'
import { MyBeats } from '../../components/HeartChart/MyBeats'
import { ActionsToComplete } from '../../components/HeartChart/ActionsToComplete'
import { RedeemYourBeats } from '../../components/HeartChart/RedeemYourBeats'
import { ActionsCompleted } from '../../components/HeartChart/ActionsCompleted'
import { MyTestResult } from '../../components/HeartChart/MyTestResult'
import { MyHeartScore } from '../../components/HeartChart/MyHeartScore'

import { HeartChartContent } from '../../components/HeartChart/'

export const HeartChart = () => {
  return <HeartChartContent />
}

export class HeartChart2 extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="h-full w-full bg-white px-4 pb-20 font-['Proxima_Nova'] sm:px-3">
        <p className="my-2 font-['Butler'] text-2xl text-black">Heart Chart</p>
        <MyBeats />
        <ActionsToComplete />
        <RedeemYourBeats />
        <ActionsCompleted />
        <MyTestResult />
        <MyHeartScore />
      </div>
    )
  }
}
