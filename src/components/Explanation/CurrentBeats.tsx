import { CurrentBeatsItem } from './CurrentBeatsItem'

export const CurrentBeats = () => {
  return (
    <div className="space-y-3">
      <CurrentBeatsItem name="Heart Score Assessment" beats={20} />
      <CurrentBeatsItem name="My Now" beats={10} />
      <hr />
      <p className="text-[22px] font-bold uppercase leading-none text-ma-pink-500">MY CURRENT BEATS: 30</p>
    </div>
  )
}
