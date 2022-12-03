import { useOutletContext, useParams } from 'react-router-dom'
import MyGoalServices from '../../services/MyGoalServices'
import { useEffect, useState } from 'react'

export default function HeartJournalArchive() {
  const { date } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getMyGoal()
  }, [])

  function getMyGoal() {
    MyGoalServices.getMyGoal(date).then((response) => {
      setData(response.data)
    })
  }

  return (
    <div className="h-full w-full bg-white px-4 pb-20 font-['Proxima_Nova'] sm:px-3">
      <div>
        <h2>{}</h2>
      </div>
      <div className="mt-4">
        <p className="font-['Butler'] text-2xl text-black">Heart Journal</p>
        <div className="mt-4 font-['Proxima_Nova']">
          <div className="mt-2 bg-transparent">
            <div className="grid grid-cols-1 gap-2">
              <div>
                <div className="flex w-full items-center justify-start gap-2 rounded-2xl bg-color-text-primary p-4">
                  <span className="text-[15px] font-bold uppercase leading-[17px] text-white">commit to my heart</span>
                </div>
                <div className="mt-2 px-2">
                  <p className="text-lg font-bold text-color-text-primary">Nourish yourself through healthy eating habits.</p>
                  <div className="mt-4">
                    <p className="font-bold">What heart healthy foods did you eat today?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-pink-textarea px-2 py-3" readOnly disabled>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">What unhealthy foods did you eat today?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-pink-textarea px-2 py-3" readOnly disabled value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">What do you want to change tomorrow?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-pink-textarea px-2 py-3" readOnly disabled>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">On a scale of 1-5, how would you rate your nourishment habits for the day?</p>
                    <div className="mt-2 w-full">
                      <div className="flex w-full justify-between px-2 text-xs">
                        <span className="font-medium">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                      <input type="range" min="0" max="100" className="range-pink range range-xs mt-1" step="25" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex w-full items-center justify-start gap-2 rounded-2xl bg-color-medium-risk p-4">
                  <span className="text-[15px] font-bold uppercase leading-[17px] text-white">move my heart</span>
                </div>
                <div className="mt-2 px-2">
                  <p className="text-lg font-bold text-color-medium-risk">Get moving to energize your heart.</p>
                  <div className="mt-4">
                    <p className="font-bold">Daily Moves</p>
                    <table className="mt-1 table w-full">
                      <tr className="">
                        <td className="border bg-transparent text-base font-normal font-semibold">What you did</td>
                        <td className="border bg-transparent text-base font-normal font-semibold">How long</td>
                      </tr>
                      <tr>
                        <td className="border">walking</td>
                        <td className="border">35 min</td>
                      </tr>
                      <tr>
                        <td className="border">yoga</td>
                        <td className="border">1 hour 35 min</td>
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
                        <td className="border">walking</td>
                        <td className="border">35 min</td>
                      </tr>
                      <tr>
                        <td className="border">yoga</td>
                        <td className="border">1 hour 35 min</td>
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
                </div>
              </div>
              <div className="mt-4">
                <div className="flex w-full items-center justify-start gap-2 rounded-2xl bg-color-violet p-4">
                  <span className="text-[15px] font-bold uppercase leading-[17px] text-white">refresh my heart</span>
                </div>
                <div className="mt-2 px-2">
                  <p className="text-lg font-bold text-color-text-primary">Better manage stress to refresh yourself.</p>
                  <div className="mt-4">
                    <p className="font-bold">Who energized you today and why?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-violet-textarea px-2 py-3" readOnly disabled>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">Who drained you and why?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-violet-textarea px-2 py-3" readOnly disabled>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">What can you do tomorrow to ensure that those around you are supporting you towards your passion and purpose?</p>
                    <textarea className="mt-2 w-full rounded-none bg-color-violet-textarea px-2 py-3" readOnly disabled>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </textarea>
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">On a scale of 1-5, rate the quality of these areas of your life:</p>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Work</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Partner</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Friend and Family</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Community</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Passion (Hobbies/Creativity/Etc)</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-center text-[17px] font-bold">Purpose</p>
                      <div className="mt-2 w-full">
                        <div className="flex w-full justify-between px-2 text-xs">
                          <span className="font-medium">1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                        </div>
                        <input type="range" min="0" max="100" className="range-violet range range-xs mt-1" step="25" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
