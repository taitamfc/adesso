import { DashboardSection } from '../Common/DashboardSection'

type Props = {}

export const MyNextSession = () => {
  return (
    <DashboardSection className="space-y-4" title="My next session">
      <div className="flex w-full flex-col items-center justify-center rounded-[5px] bg-dashboard-my-next-session bg-cover bg-center bg-no-repeat py-6 text-white">
        <h4 className="text-[26px] font-bold leading-[35px]">
          Know Your Heart
        </h4>

        <div className="flex items-center justify-center space-x-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white">
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.789967 1.51732C0.780497 0.721259 1.65979 0.23386 2.32987 0.663737L9.39736 5.19777C10.0344 5.60643 10.0041 6.54717 9.3422 6.91408L2.37458 10.7763C1.71266 11.1432 0.898848 10.6703 0.889846 9.91357L0.789967 1.51732Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-[14px] font-semibold">14 mins</span>
        </div>
      </div>
    </DashboardSection>
  )
}
