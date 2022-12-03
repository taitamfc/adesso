import { Logo } from '../../components/Partials/Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="flex w-full bg-white px-4 py-5">
      <div className="w-full">
        <Link to="/">
          <Logo className="block h-[34px] w-[145px] hover:opacity-80" />
        </Link>
      </div>
    </header>
  )
}
