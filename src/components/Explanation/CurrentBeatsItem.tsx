import { IconChecked } from '../Common/IconChecked'

type Props = {
  name: string
  beats: number
}

export const CurrentBeatsItem = ({ name, beats }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <IconChecked isChecked />
      <p className="text-ma-md font-semibold">{`${name} = ${beats} beats`}</p>
    </div>
  )
}
