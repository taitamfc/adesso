import { HeartJournalWrapper } from './Wrapper'
import { HeartJournalSection } from './Section'
import { HeartJournalMyGoals } from './MyGoals'
import { HeartJournalMyData } from './MyData'
import { HeartJournalAllGoals } from './AllGoalsList'

export const HeartJournalContent = () => {
  return (
    <HeartJournalWrapper className="space-y-4">
      <HeartJournalSection className="space-y-4" title="Heart Journal">
        <p className="text-[17px] font-medium leading-[21px]">
          The Heart Journal is where you can manage your goals, journals and actions. Click into a goal to submit a journal and Go Deeper on topics related to a goal. Each session you will have the
          chance to make that topic a personalized goal for you. You can do as many or as few goals as you choose (we recommend at least three) that are meaningful for your health and wellbeing.
        </p>
      </HeartJournalSection>

      <HeartJournalMyGoals />
      <HeartJournalMyData />
      <HeartJournalAllGoals />
    </HeartJournalWrapper>
  )
}
