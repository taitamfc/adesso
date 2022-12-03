import { Header } from '../../parts/Header/Header'
import { Outlet, useRoutes } from 'react-router-dom'
import { Footer } from '../../parts/Footer/Footer'
import { Component } from 'react'

export class FullLayout extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="flex h-full min-h-screen w-full min-w-[375px] max-w-md flex-col items-center font-sans">
        <Header />

        <div className="flex h-full w-full flex-1 justify-center bg-white text-black">
          <div className="flex w-full justify-center">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
