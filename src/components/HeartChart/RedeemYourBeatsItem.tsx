export type Beat = {
  id: string
  title: string
  image: string
  link: string
  point: number
}

type Props = {
  children?: React.ReactNode
  dataBeat: Beat
}

export const RedeemYourBeatsItem = ({ dataBeat, children }: Props) => {
  return (
    <div className="carousel-item w-carousel-item flex-col space-y-[10px]">
      <div className="relative flex aspect-video max-w-carousel-item items-center justify-center overflow-hidden">
        <div className="absolute left-1 top-2 rounded-[24px] bg-white p-1">
          <div className="bg-[url('assets/images/icon/i-heart-3.png')] bg-[length:auto_10px] bg-[center_left] bg-no-repeat pl-4 text-[10px] font-semibold leading-none tracking-[0.19px] text-[#EB2781]">
            {dataBeat.point}
          </div>
        </div>

        {children}
      </div>

      <a className="text-[16px] font-semibold capitalize leading-[18px] tracking-[0.19px] text-black" href={dataBeat.link}>
        {dataBeat.title}
      </a>
    </div>
  )
}
