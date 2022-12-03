type Props = {
  className?: string
  children?: React.ReactNode
}

export const WrapperCommon = ({ className, children }: Props) => {
  return <div className={`h-full w-full bg-white px-4 pb-20 font-['Proxima_Nova'] ${className}`}>{children}</div>
}
