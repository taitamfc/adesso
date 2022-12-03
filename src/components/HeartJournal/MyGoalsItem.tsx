import { useMemo } from 'react'

export enum GoalType {
  CommitTo,
  Move,
  Refresh,
  Disable,
}

export enum ActionType {
  Add,
  Remove,
}

type Props = {
  text: string
  goalType: GoalType
  actionType: ActionType
}

const mapBgColor = (goalType: GoalType): string => {
  switch (goalType) {
    case GoalType.CommitTo:
      return 'bg-color-text-primary'
    case GoalType.Move:
      return 'bg-color-bg-secondary'
    case GoalType.Refresh:
      return 'bg-color-violet'
  }

  return 'bg-color-add-goal-secondary'
}

export const HeartJournalMyGoalsItem = ({ text, goalType, actionType }: Props) => {
  const bgColor = mapBgColor(goalType)

  const actionButton = useMemo(() => {
    const isAddAction = actionType === ActionType.Add
    const icon = isAddAction ? `bg-[url('assets/images/icon/i-add.svg')]` : `bg-[url('assets/images/icon/i-remove.svg')]`
    const textButton = isAddAction ? 'Add' : 'Remove'
    const colorButton = isAddAction ? 'text-color-text-primary' : 'text-color-text-secondary'

    return (
      <div className={`ml-4 flex h-[29px] w-24 cursor-pointer items-center justify-end bg-[length:auto_29px] bg-[center_right_1px] bg-no-repeat pr-9 ${icon}`}>
        <span className={`text-[14px] font-semibold leading-[17px] tracking-[0.15px] ${colorButton}`}>{textButton}</span>
      </div>
    )
  }, [actionType])

  return (
    <div className="flex items-center justify-between">
      <div className={`flex h-[50px] w-full items-center justify-start space-x-2 rounded-[15px] px-4 py-[9px] ${bgColor}`}>
        <span className="text-[15px] font-bold uppercase leading-none text-white">{text}</span>
      </div>

      {actionButton}
    </div>
  )
}
