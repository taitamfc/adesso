export enum ArrowType {
  Left = 'left',
  Right = 'right',
}

type Props = {
  text: string
  children?: React.ReactNode
  className?: string
  plusPoint?: number
  arrow?: ArrowType
}

export const BoxText = ({ text, children, className, plusPoint, arrow }: Props) => {
  return (
    <div className={`relative w-full rounded-[15px] bg-white p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}>
      {arrow && (
        <div
          className={`absolute -top-10 h-[57px] w-[49px] bg-[url('assets/images/icon/i-arrow_up.png')] bg-[length:auto_100%] bg-center bg-no-repeat ${arrow === ArrowType.Left ? 'left-5' : 'right-5'}`}
        />
      )}
      <p className="text-[17px] font-medium leading-[21px]">{children || text}</p>
      {plusPoint && <p className="text-[24px] font-bold leading-none text-color-text-primary">+{plusPoint} beats</p>}
    </div>
  )
}
