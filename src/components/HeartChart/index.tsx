import { HeartJournalWrapper } from '../HeartJournal/Wrapper'
import { HeartChartSection } from './Section'
import { ActionsItem } from './ActionsItem'
import { RedeemYourBeatsItem, Beat } from './RedeemYourBeatsItem'

const CarouselItems: Beat[] = [
  {
    id: 'cook_like_a_chef_class',
    title: 'Cook like a Chef Class',
    image: 'images/redeem-your-beats/1.png',
    point: 140,
    link: '#',
  },
  {
    id: 'myadesso_favorite_cap',
    title: 'MyAdesso Favorite Cap',
    image: 'images/redeem-your-beats/2.png',
    point: 90,
    link: '#',
  },
  {
    id: 'myadesso_favorite_juice',
    title: 'MyAdesso Favorite Juice',
    image: 'images/redeem-your-beats/3.png',
    point: 25,
    link: '#',
  },
  {
    id: 'juicing_for_a_healthy_heart_2',
    title: 'Juicing for a healthy heart',
    image: 'images/redeem-your-beats/1.png',
    point: 111,
    link: '#',
  },
]

export const HeartChartContent = () => {
  return (
    <HeartJournalWrapper className="space-y-4">
      <h3 className="font-['Butler'] text-[24px] leading-[1.41667]">Heart Chart</h3>

      <HeartChartSection className="space-y-4" title="MY BEATS">
        <div className="flex justify-between">
          <div className="flex h-[98px] w-[calc(50%-6px)] flex-col items-center space-y-2 rounded-[15px] bg-color-beats py-4">
            <div className="flex h-14 w-full items-center justify-center bg-[url('assets/images/icon/i-heart.svg')] bg-[length:auto_100%] bg-center bg-no-repeat text-center text-[20px] font-medium leading-none text-white">
              60
            </div>
            <h4 className="text-center text-[15px] font-medium uppercase leading-none text-color-text-primary">Heart basics</h4>
          </div>

          <div className="flex h-[98px] w-[calc(50%-6px)] flex-col items-center space-y-2 rounded-[15px] bg-color-violet py-4">
            <div className="h-9 w-full bg-[url('assets/images/icon/i-lock.svg')] bg-[length:auto_100%] bg-center bg-no-repeat" />
            <h4 className="text-center text-[12px] font-medium uppercase leading-[1.25] text-white">
              40 points more to <br /> UNLOCK Heart Alive 1
            </h4>
          </div>
        </div>
      </HeartChartSection>

      <HeartChartSection className="space-y-4 py-[16px]" title="ACTIONS TO COMPLETE">
        <div className="space-y-4">
          <ActionsItem text="Take “Nourishment” Session." point={10} />
          <ActionsItem text="Enter Your Today’s Heart Rate" point={2} />
          <ActionsItem text="Create a menu for your week" point={2} />
        </div>
      </HeartChartSection>

      <HeartChartSection className="space-y-4" title="REDEEM YOUR BEATS">
        <div className="carousel-center carousel -mx-4 w-[calc(100%+32px)] space-x-3 px-4">
          {CarouselItems.map((item) => {
            return (
              <RedeemYourBeatsItem key={item.id} dataBeat={item}>
                <img src={item.image} className="h-auto w-full max-w-carousel-item" />
              </RedeemYourBeatsItem>
            )
          })}
        </div>
      </HeartChartSection>

      <HeartChartSection className="space-y-4 py-[16px]" title="ACTIONS COMPLETED">
        <div className="space-y-4">
          <ActionsItem text="Heart Score" point={10} isCompleted />
          <ActionsItem text="My Now" point={30} isCompleted />
          <ActionsItem text="Sessions Completed" point={10} isCompleted />
          <ActionsItem text="Sessions Completed" point={10} isCompleted />
          <ActionsItem text="Actions" point={25} isCompleted />
          <ActionsItem text="Go Deeper" point={5} isCompleted />
        </div>
      </HeartChartSection>

      <HeartChartSection className="space-y-4" title="MY TEST RESULTS">
        <div className="w-80 rounded-[15px] bg-[#EB2781] p-2">
          <div className="bg-[url('assets/images/icon/i-lab.png')] bg-[length:auto_49px] bg-[center_left] bg-no-repeat py-2 pl-14 text-[15px] font-semibold uppercase leading-[17px] tracking-[0.15em] text-white">
            Update Your Testing and Lab Numbers
          </div>
        </div>
      </HeartChartSection>

      <HeartChartSection className="space-y-4 pt-10" title="My Heart Score">
        <div className="flex justify-between">
          <div className="mr-4 flex h-[130px] w-[130px] items-center justify-center rounded-full border-[10px] border-color-medium-risk font-['Lato'] text-[44px] leading-none text-color-medium-risk">
            70
          </div>
          <div className="w-[calc(100%-146px)]">
            <h3 className="text-[24px] text-color-medium-risk">Moderate</h3>
            <p className="pt-1 pb-4 text-[13px] leading-[16px]">This score is calculated from your Responses to your most recent Adesso Heart Score Questionaire</p>
            <p className="text-[13px] leading-[16px] text-color-primary underline">Take The Heart Score Again</p>
          </div>
        </div>
      </HeartChartSection>
    </HeartJournalWrapper>
  )
}
