import { Component } from 'react'
import MyGoalServices from '../../services/MyGoalServices'
import { NavLink } from 'react-router-dom'
import { Goal } from '../../types/Goal'

import { DashboardSection } from '../Common/DashboardSection'

const VALID_ACTIONS = [
  'COMMIT TO MY HEART',
  'MOVE MY HEART',
  'REFRESH MY HEART',
]

const dummyData = []

type Props = {}

export const MyHeartActions = () => {
  //   componentDidMount() {
  //   MyGoalServices.getMyGoal().then((response) => {
  //     let data = response.data
  //     let newData: {
  //       id: number
  //       name: string
  //       description: null | string
  //       order: number
  //       add_date: string
  //     }[] = []
  //     if (data.length) {
  //       data.forEach(function (action: Goal) {
  //         if (VALID_ACTIONS.indexOf(action.name) > -1) {
  //           newData.push(action)
  //         }
  //       })
  //     }
  //     this.setState({
  //       data: newData,
  //     })
  //   })
  // }

  return (
    <DashboardSection className="space-y-4" title="My Heart Actions">
      <div className="space-y-2">
        <div className="flex w-full items-center justify-start space-x-2 rounded-[15px] bg-color-text-primary px-4 py-[9px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white">
            <svg
              className="h-auto w-4"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.919 0.217597C15.4854 -0.43084 16.3864 0.514797 15.82 1.16372C12.6793 4.89222 9.51187 8.5667 6.3463 12.2677C6.19184 12.4568 6.03737 12.6189 5.88291 12.8081C5.65305 13.0782 5.21357 13.0493 4.98187 12.8081C3.38576 11.2159 1.78964 9.5929 0.193519 7.99883C-0.398589 7.40443 0.502445 6.43178 1.09455 7.05319C2.53621 8.48516 3.95212 9.91712 5.39378 11.3761C8.58601 7.64759 11.7525 3.9461 14.919 0.217597Z"
                fill="#FF3399"
              />
            </svg>
          </div>
          <span className="text-[15px] font-bold uppercase leading-none text-white">
            COMMIT TO MY HEART
          </span>
        </div>

        <div className="flex w-full items-center justify-start space-x-2 rounded-[15px] bg-color-bg-secondary px-4 py-[9px]">
          <div className="h-8 w-8 rounded-full border border-white" />
          <span className="text-[15px] font-bold uppercase leading-none text-white">
            MOVE MY HEART
          </span>
        </div>

        <div className="flex w-full items-center justify-start space-x-2 rounded-[15px] bg-color-violet px-4 py-[9px]">
          <div className="h-8 w-8 rounded-full border border-white" />
          <span className="text-[15px] font-bold uppercase leading-none text-white">
            REFRESH MY HEART
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/heart-chart"
          className="text-[14px] leading-none text-color-primary underline decoration-color-primary"
        >
          See your Heart Journal
        </NavLink>
      </div>
    </DashboardSection>
  )
}
