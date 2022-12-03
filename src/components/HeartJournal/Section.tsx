type Props = {
  title?: string
  className?: string
  children?: React.ReactNode
}

export const HeartJournalSection = ({ title, className, children }: Props) => {
  return (
    <section className={className}>
      {title && <h3 className="font-['Butler'] text-[24px] leading-[1.41667]">{title}</h3>}
      {children}
    </section>
  )
}
