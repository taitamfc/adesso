import logoPath from '../../assets/images/logo.png'

type Props = {
  className: string
}

export const Logo = ({ className }: Props) => {
  return <img src={logoPath} className={className} alt="Logo" />
}
