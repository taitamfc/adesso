import { Component } from 'react'
import { MyNow } from '../MyNow'
import { MyBeats } from '../MyBeats'
import { MyHeartActions } from '../MyHeartActions'
import { MyNextSession } from '../MyNextSession'
import { GoDeeper } from '../GoDeeper'
import { Navigate } from 'react-router-dom'
import MyActionServices from '../../../services/MyActionServices'

const REDIRECT_TO = '/dashboard'

type Props = {
  handleNextClick: any
}

export class StepMyNow extends Component<Props, any> {
  constructor(props: Props) {
    super(props)
    this.handleNextClick = this.handleNextClick.bind(this)
  }

  handleNextClick() {
    this.props.handleNextClick()
  }

  render() {
    return (
      <div className="h-full w-full bg-white px-4 pb-20 font-['Proxima_Nova'] sm:px-3">
        <MyNow handleNextClick={this.handleNextClick} willShowPopup={true} />
        <MyBeats handleNextClick={null} willShowPopup={false} lastScreen={false} />
        <MyHeartActions />
        <MyNextSession />
        <GoDeeper />
        <div className="fixed top-0 left-0 z-10 h-full min-h-full w-full min-w-full bg-color-overlay/50"></div>
      </div>
    )
  }
}
