type Props = {
  title?: string
  subTitle?: string
  className?: string
  children?: React.ReactNode
}

export const TitlePage = ({ title, subTitle, className = '', children }: Props) => {
  return (
    <div className={`w-full ${className} ${title && subTitle ? 'space-y-6' : ''}`}>
      {title && <div className="text-ma-xl font-semibold">{title}</div>}
      {subTitle && <div className="text-ma-md font-bold">{subTitle}</div>}
      {children}
    </div>
  )
}
