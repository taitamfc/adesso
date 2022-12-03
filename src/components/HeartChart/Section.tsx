type Props = {
  title?: string
  className?: string
  children?: React.ReactNode
}

export const HeartChartSection = ({ title, className, children }: Props) => {
  return (
    <section className={className}>
      {title && <h4 className="text-[15px] font-semibold uppercase leading-[21px]">{title}</h4>}
      {children}
    </section>
  )
}
