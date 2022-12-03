import { Outlet } from 'react-router-dom'

import { Header } from '../../parts/Header/Header'
import { FooterCommon } from '../Common/Footer'

type Props = {
  noHeader?: boolean
  noFooter?: boolean
}

export const LayoutWrapper = ({ noHeader = false, noFooter = false }: Props) => {
  return (
    <div className="mx-auto h-full min-h-screen w-[375px] font-sans">
      {!noHeader && <Header />}

      <div className={`flex w-full bg-white text-black ${noHeader ? 'min-h-screen' : 'min-h-[calc(100vh-74px)]'} ${noFooter ? '' : 'pb-[58px]'}`}>
        <Outlet />
      </div>

      {!noFooter && <FooterCommon />}
    </div>
  )
}
