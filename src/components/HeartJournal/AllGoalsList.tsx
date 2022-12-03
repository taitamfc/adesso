import { HeartJournalSection } from './Section'
import { HeartJournalMyGoalsItem, GoalType, ActionType } from './MyGoalsItem'

export const HeartJournalAllGoals = () => {
  return (
    <HeartJournalSection className="space-y-2" title="All Goals">
      <HeartJournalMyGoalsItem text="COMMIT TO MY HEART" goalType={GoalType.Disable} actionType={ActionType.Add} />
      <HeartJournalMyGoalsItem text="RELATE FOR MY HEART" goalType={GoalType.Disable} actionType={ActionType.Add} />
      <HeartJournalMyGoalsItem text="KNOW MY NUMBERS" goalType={GoalType.Disable} actionType={ActionType.Add} />
      <HeartJournalMyGoalsItem text="TEST MY HEART" goalType={GoalType.Disable} actionType={ActionType.Add} />
      <HeartJournalMyGoalsItem text="MANAGE MY HORMONES" goalType={GoalType.Disable} actionType={ActionType.Add} />
      <HeartJournalMyGoalsItem text="ADVOCATE FOR MY HEART" goalType={GoalType.Disable} actionType={ActionType.Add} />
    </HeartJournalSection>
  )
}
