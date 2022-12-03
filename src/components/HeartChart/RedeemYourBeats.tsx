import { Component } from 'react'

const CarouselItems = [
  {
    id: 'cook_like_a_chef_class',
    title: 'Cook like a Chef Class',
    image: 'images/redeem-your-beats/1.png',
    beats: 140,
    link: '#',
  },
  {
    id: 'myadesso_favorite_cap',
    title: 'MyAdesso Favorite Cap',
    image: 'images/redeem-your-beats/2.png',
    beats: 90,
    link: '#',
  },
  {
    id: 'myadesso_favorite_juice',
    title: 'MyAdesso Favorite Juice',
    image: 'images/redeem-your-beats/3.png',
    beats: 25,
    link: '#',
  },
  {
    id: 'juicing_for_a_healthy_heart_2',
    title: 'Juicing for a healthy heart',
    image: 'images/redeem-your-beats/1.png',
    beats: 111,
    link: '#',
  },
]

type States = {
  items: {
    id: string
    title: string
    image: string
    beats: number
    link: string
  }[]
}

export class RedeemYourBeats extends Component<any, States> {
  constructor(props: any) {
    super(props)
    this.getCarouselData()
  }

  getCarouselData() {
    this.state = {
      items: CarouselItems,
    }
  }

  render() {
    return (
      <div className="mt-4 w-full">
        <p className="text-[15px] font-semibold uppercase text-black">Redeem Your Beats</p>
        <div className="mt-2 bg-transparent">
          <div className="carousel-center carousel max-w-lg space-x-3">
            {this.state.items.map((item) => {
              return (
                <div key={item.id} className="carousel-item relative flex flex-col items-center justify-center">
                  <div className="absolute top-2 left-2 flex min-w-[50px] items-center justify-start rounded-full bg-white px-2">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.07093 1.69908L6.07094 1.69908L6.0736 1.69651C6.51613 1.26804 7.48186 0.545211 8.6015 0.806903C9.26316 0.962281 9.83685 1.47674 10.0766 2.15773C10.292 2.77027 10.378 3.60824 9.90587 4.63368L9.90573 4.63398C9.89211 4.66361 9.87794 4.69351 9.86322 4.72368L9.86307 4.72399C9.52921 5.40906 8.9332 6.20209 7.91483 7.07376L7.91043 7.07742L7.88707 7.09685L7.79956 7.16971L7.48806 7.4291L6.54225 8.21675L5.59207 9.00797L5.50017 9.08446L3.08764 7.07608C2.06792 6.2034 1.47135 5.4096 1.13722 4.72399L1.13723 4.72399L1.13602 4.72152C1.12152 4.69204 1.10763 4.66287 1.09435 4.63399L1.09421 4.63368C0.622044 3.60812 0.707995 2.77021 0.923445 2.15817L0.923588 2.15776C1.16264 1.47743 1.73626 0.962615 2.39883 0.807055L2.39886 0.80705C3.51866 0.544108 4.48256 1.26605 4.92506 1.69509L4.92506 1.6951L4.92782 1.69775C4.94106 1.71045 4.95429 1.72356 4.96847 1.7378L5.49649 2.26809L6.02795 1.74124C6.04484 1.7245 6.05778 1.71168 6.07093 1.69908Z"
                        stroke="#EB2781"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="ml-1 text-[10px] font-semibold text-color-text-primary">{item.beats}</span>
                  </div>
                  <div className="rounded-box aspect-video">
                    <img src={item.image} className="h-auto w-full max-w-carousel-item rounded" />
                  </div>
                  <a className="max-w-carousel-item font-semibold capitalize text-black" href={item.link}>
                    {item.title}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
