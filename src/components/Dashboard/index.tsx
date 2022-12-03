import { DashboardWrapper } from '../Common/DashboardWrapper'
import { MyNow } from './MyNow'
import { MyBeats } from './MyBeats'
import { MyHeartActions } from './MyHeartActions'
import { MyNextSession } from './MyNextSession'
import { GoDeeper } from './GoDeeper'

type Props = {
  isIntroduction?: boolean
  myNowData: string
  score: number
}

export const DashboardContent = ({ isIntroduction, myNowData, score }: Props) => {
  return (
    <DashboardWrapper className="space-y-4">
      <MyNow myNowData={myNowData} isIntroduction={isIntroduction} />
      <MyBeats score={score} />
      <MyHeartActions />
      <MyNextSession />
      <GoDeeper />
    </DashboardWrapper>
  )
}
