import { HeartJournalSection } from './Section'
import { HeartJournalMyGoalsItem, GoalType, ActionType } from './MyGoalsItem'

export const HeartJournalMyGoals = () => {
  return (
    <HeartJournalSection className="space-y-2" title="My Goals">
      <HeartJournalMyGoalsItem text="NOURISH MY HEART" goalType={GoalType.CommitTo} actionType={ActionType.Remove} />
      <HeartJournalMyGoalsItem text="MOVE MY HEART" goalType={GoalType.Move} actionType={ActionType.Remove} />
      <HeartJournalMyGoalsItem text="REFRESH MY HEART" goalType={GoalType.Refresh} actionType={ActionType.Remove} />
    </HeartJournalSection>
  )
}
