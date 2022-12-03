type Props = {
  children?: React.ReactNode
  background?: string
}

export const Wrapper = ({ children, background = 'bg-default' }: Props) => {
  return (
    <div className={`h-full w-full ${background}`}>
      <div className={'m-w-[375px] mx-auto h-full w-[375px] py-5 px-3 text-white'}>{children}</div>
    </div>
  )
}
