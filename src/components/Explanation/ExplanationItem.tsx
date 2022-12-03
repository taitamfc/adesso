export type ExplanationType = {
  name: string
  beats: number
  unit: string
}

type Props = {
  item: ExplanationType
}

export const ExplanationItem = ({ item }: Props) => {
  return (
    <div className="flex items-center space-x-4">
      <p className="flex-1 text-ma-md font-semibold">{item.name}</p>
      <div className="flex w-[146px] items-center space-x-1">
        <div className="flex h-[41px] w-[45px] items-center justify-center bg-[url('assets/images/icon/i-heart__gradient.svg')] bg-[length:auto_41px] bg-center bg-no-repeat pb-1 text-[18px] font-semibold leading-none text-white">
          {`+${item.beats}`}
        </div>
        <p className="text-ma-xs font-semibold uppercase text-ma-pink-300">{item.unit}</p>
      </div>
    </div>
  )
}
