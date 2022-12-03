type Props = {
  children?: React.ReactNode
  className?: string
}

export const MainWrapper = ({ children, className = '' }: Props) => {
  return <div className={`min-h-full w-full bg-black bg-cover bg-center bg-no-repeat px-5 font-['Figtree'] ${className}`}>{children}</div>
}
