import { Component } from 'react'
import { HeartJournal as HeartJournalComponent } from '../../components/HeartJournal/HeartJournal'
import { YourGoal } from '../../components/HeartJournal/YourGoal'
import { YourData } from '../../components/HeartJournal/YourData'
import { AllGoals } from '../../components/HeartJournal/AllGoals'
import { Link } from 'react-router-dom'

export class HeartJournalAction extends Component<any, any> {
  render() {
    return (
      <div className="h-full w-full bg-white px-4 pb-20 font-['Proxima_Nova'] sm:px-3">
        <div className="mt-4">
          <p className="font-['Butler'] text-2xl text-black">Move My Heart</p>
          <div className="mt-4 font-['Proxima_Nova']">
            <p className="text-[17px] font-bold uppercase">Log your movements</p>
            <div className="mt-2 px-2">
              <div className="mt-4">
                <p className="font-bold">Daily Moves</p>
                <table className="mt-1 table w-full">
                  <tr className="">
                    <td className="border bg-transparent text-base font-normal font-semibold">What you did</td>
                    <td className="border bg-transparent text-base font-normal font-semibold">How long</td>
                  </tr>
                  <tr>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                </table>
              </div>
              <div className="mt-4">
                <p className="font-bold">Target Moves (THR for 30 minutes)</p>
                <table className="mt-1 table w-full">
                  <tr className="">
                    <td className="border bg-transparent text-base font-normal font-semibold">What you did</td>
                    <td className="border bg-transparent text-base font-normal font-semibold">How long</td>
                  </tr>
                  <tr>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                </table>
              </div>
              <div className="mt-3">
                <p className="font-bold">On a scale of 1-5, how would you rate your nmovement habits for the day?</p>
                <div className="mt-2 w-full">
                  <div className="flex w-full justify-between px-2 text-xs">
                    <span className="font-medium">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                  <input type="range" min="0" max="100" className="range-orange range range-xs mt-1" step="25" />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-bold">Go Deeper (earn extra points!)</p>
                <div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-sm border-2" />
                      <span className="underline underline-offset-4">Calculate your target heart rate</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-sm border-2" />
                      <span className="underline underline-offset-4">Create a target movement plan</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-sm border-2" />
                      <span className="underline underline-offset-4">Create a daily movement plan</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-sm border-2" />
                      <span className="underline underline-offset-4">Exercise physiology</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-sm border-2" />
                      <span className="underline underline-offset-4">Develop a roadmap to increase intensity</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-center gap-3 text-[15px]">
                <Link
                  to="/heart-journal"
                  className="btn h-quiz-button min-w-quiz-button
                                    rounded-full border-color-primary
                                    bg-color-primary text-white hover:border-color-primary hover:bg-color-secondary-gray hover:text-color-primary "
                >
                  Back
                </Link>
                <Link
                  to="/deeper/finish"
                  className="btn h-quiz-button min-w-quiz-button
                                    rounded-full border-color-primary
                                    bg-color-primary text-white hover:border-color-primary hover:bg-color-secondary-gray hover:text-color-primary "
                >
                  confirm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
