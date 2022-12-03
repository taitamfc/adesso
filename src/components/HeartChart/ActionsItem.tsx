type Props = {
  text: string
  point: number
  isCompleted?: boolean
}

export const ActionsItem = ({ text, point, isCompleted }: Props) => {
  const textColor = isCompleted ? '' : 'text-color-primary underline'
  const icon = isCompleted ? `bg-[url('assets/images/icon/i-heart-3.png')]` : ''

  return (
    <div className="flex justify-between text-[16px] leading-[18px]">
      <div className={textColor}>{text}</div>
      <div className={`w-12 bg-[length:auto_19px] bg-[center_left] bg-no-repeat py-[1px] pl-6 text-center text-[#EB2781] ${icon}`}>{point}</div>
    </div>
  )
}
