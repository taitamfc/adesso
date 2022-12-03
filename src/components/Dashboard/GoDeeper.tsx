import { DashboardSection } from '../Common/DashboardSection'

const CarouselItems = [
  {
    id: 'what_to_eat_to_lower_your_cholesterol',
    title: 'What to eat to lower your cholesterol',
    image: 'images/deeper/1.png',
    link: '#',
  },
  {
    id: 'juicing_for_a_healthy_heart',
    title: 'Juicing for a healthy heart',
    image: 'images/deeper/2.png',
    link: '#',
  },
  {
    id: 'what_to_eat_to_lower_your_cholesterol_2',
    title: 'What to eat to lower your cholesterol',
    image: 'images/deeper/1.png',
    link: '#',
  },
  {
    id: 'juicing_for_a_healthy_heart_2',
    title: 'Juicing for a healthy heart',
    image: 'images/deeper/2.png',
    link: '#',
  },
]

type Props = {}

export const GoDeeper = () => {
  return (
    <DashboardSection className="space-y-4" title="Go Deeper">
      <div className="carousel-center carousel -mx-4 w-[calc(100%+32px)] space-x-3 px-4">
        {CarouselItems.map((item) => {
          return (
            <div key={item.id} className="carousel-item flex-col space-y-1">
              <div className="rounded-box aspect-video">
                <img
                  src={item.image}
                  className="h-auto w-full max-w-carousel-item rounded"
                />
              </div>
              <a
                className="w-carousel-item text-[14px] capitalize leading-[18px] tracking-[0.07em] text-black"
                href={item.link}
              >
                {item.title}
              </a>
            </div>
          )
        })}
      </div>

      <div className="flex justify-end">
        <a className="text-[14px] leading-none text-color-primary underline decoration-color-primary">
          Go Deeper Library
        </a>
      </div>
    </DashboardSection>
  )
}
