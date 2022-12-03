import { Link } from 'react-router-dom'

type Props = {
  link: string
  name: string
  children?: React.ReactNode
}

export const FooterItem = ({ link, name, children }: Props) => {
  return (
    <Link to={link} className="flex w-full flex-col items-center space-y-[2px]">
      <div className="flex h-6 w-full items-center justify-center">{children}</div>
      <span className="font-roboto text-ma-xs tracking-ma-wide text-white">{name}</span>
    </Link>
  )
}
