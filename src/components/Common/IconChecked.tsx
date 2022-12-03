type Props = {
  isChecked?: boolean
}

export const IconChecked = ({ isChecked = false }: Props) => {
  return (
    <div className="h-[31px] w-[31px] rounded-full bg-gradient-to-b from-ma-red to-ma-red-300">
      <div className="h-full w-full bg-[url('assets/images/icon/i-check__white.svg')] bg-[length:auto_13px] bg-center bg-no-repeat" />
    </div>
  )
}
