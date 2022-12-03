import { Link } from 'react-router-dom'

import { HeartJournalSection } from './Section'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthData: number[][] = [
  [-1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1],
]

const getDataMonth = (dataMonthDefault: number[][], today: Date): number[][] => {
  const dataMonth = dataMonthDefault
  const thisYear = today.getFullYear()
  const monthIndex = today.getMonth()
  const thisMonth = monthIndex + 1

  const date = new Date(thisYear, monthIndex, 1)
  const daysInPrevMonth = new Date(thisYear, monthIndex, 0).getDate()
  const dayStartInMonth = date.getDay()

  dataMonth[0][dayStartInMonth] = 1
  for (let j = 0; j < dayStartInMonth; j++) {
    if (dataMonth[0][j] === -1) {
      // dataMonth[0][j] = daysInPrevMonth - (dayStartInMonth - j - 1)
      dataMonth[0][j] = 0
    }
  }

  date.setDate(date.getDate() + 1)
  while (date.getMonth() === monthIndex) {
    const dayOfWeek = date.getDay()
    for (let i = 0; i < 7; i++) {
      if ((dataMonth[i] || [])[dayOfWeek] === -1) {
        dataMonth[i][dayOfWeek] = date.getDate()
        break
      }
    }
    date.setDate(date.getDate() + 1)
  }

  return dataMonth
}

export const HeartJournalMyData = () => {
  const daysGoal = ['2022-11-13', '2022-11-14']
  const today = new Date()
  const thisDate = today.getDate()
  const monthIndex = today.getMonth()
  const thisMonth = monthIndex + 1
  const thisYear = today.getFullYear()
  const daysInMonth = new Date(thisYear, thisMonth, 0).getDate()
  const dayStartInMonth = new Date(thisYear, monthIndex, 1).getDay()
  const textCurrentMonth = `${monthNames[monthIndex]} ${thisYear}`
  const dataMonth = getDataMonth(monthData, today)

  return (
    <HeartJournalSection className="space-y-4" title="My Data">
      <h4 className="text-[13px] font-semibold uppercase leading-[17px] tracking-[0.15px]">{textCurrentMonth}</h4>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-color-gray">
            {daysOfWeek.map((name, index) => {
              return (
                <th key={index} className="w-[calc(100%/7)] text-[14px] font-semibold leading-7 tracking-[0.15px] first:rounded-[5px_0_0_5px] last:rounded-[0_5px_5px_0]">
                  {name}
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {dataMonth.map((week, indexWeek) => {
            return (
              <tr key={indexWeek} className="">
                {week.map((day, indexDay) => {
                  const fullDateText: string = `${thisYear}-${thisMonth > 9 ? thisMonth : `0${thisMonth}`}-${day > 9 ? day : `0${day}`}`
                  const isDayGoal = daysGoal.includes(fullDateText)
                  const isToday = day === thisDate
                  const isDayInMonth = day > 0 && daysInMonth > indexWeek * 7 + indexDay - dayStartInMonth

                  const marginTop = indexWeek < 1 ? 'mt-2' : 'mt-0'
                  const textColor = isDayInMonth ? (isToday || isDayGoal ? 'text-white' : 'text-black') : 'text-color-add-goal-secondary'
                  const background = isToday
                    ? `bg-[url('assets/images/icon/i-circle.svg')] bg-[length:auto_33px]`
                    : isDayGoal
                    ? `bg-[url('assets/images/icon/i-heart-2.svg')] bg-[length:auto_27px]`
                    : `bg-[length:auto_33px] hover:bg-[url('assets/images/icon/i-circle-2.svg')] hover:text-white`

                  return (
                    <td key={`${indexWeek}-${indexDay}`}>
                      {isDayInMonth && (
                        <Link
                          to={`/heart-journal/archive/${fullDateText}`}
                          className={`flex h-9 w-full items-center justify-center bg-center bg-no-repeat text-[14px] font-semibold leading-none ${marginTop} ${background} ${textColor}`}
                        >
                          {day}
                        </Link>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </HeartJournalSection>
  )
}
