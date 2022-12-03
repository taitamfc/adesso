import { NavLink } from 'react-router-dom'
import { DashboardSection } from '../Common/DashboardSection'

type Props = {
  score: number
}

export const MyBeats = ({ score }: Props) => {
  return (
    <DashboardSection className="space-y-4" title="My Beats">
      <div className="flex justify-between">
        <div className="flex h-[98px] w-[calc(50%-6px)] flex-col items-center space-y-2 rounded-[15px] bg-color-beats py-4">
          <div className="flex h-14 w-full items-center justify-center bg-[url('assets/images/icon/i-heart.svg')] bg-[length:auto_100%] bg-center bg-no-repeat text-center text-[20px] font-medium leading-none text-white">
            {score}
          </div>
          <h4 className="text-center text-[15px] font-medium uppercase leading-none text-color-text-primary">
            Heart basics
          </h4>
        </div>

        <div className="flex h-[98px] w-[calc(50%-6px)] flex-col items-center space-y-2 rounded-[15px] bg-color-violet py-4">
          <div className="h-9 w-full bg-[url('assets/images/icon/i-lock.svg')] bg-[length:auto_100%] bg-center bg-no-repeat" />
          <h4 className="text-center text-[12px] font-medium uppercase leading-[1.25] text-white">
            40 points more to <br /> UNLOCK Heart Alive 1
          </h4>
        </div>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/heart-chart"
          className="text-[14px] leading-none text-color-primary underline decoration-color-primary"
        >
          See My Heart Chart
        </NavLink>
      </div>
    </DashboardSection>
  )
}
