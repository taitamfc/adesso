export enum ButtonStyles {
  Dark = 'dark',
  Light = 'light',
  Introduction = 'introduction',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

type Props = {
  children?: React.ReactNode
  width?: string
  height?: string
  text?: string
  type?: ButtonType
  style?: ButtonStyles
  disabled?: boolean
  onClick: () => void
}

export const ButtonCommon = ({ children, width = 'w-auto', height = 'h-auto', text, disabled, style = ButtonStyles.Light, type = ButtonType.Button, onClick }: Props) => {
  const isLightStyle = style === ButtonStyles.Light
  const isIntroductionStyle = style === ButtonStyles.Introduction
  const classNameDefault = 'mx-auto block border-none rounded-full uppercase text-[15px] font-semibold leading-[21px] tracking-[0.15px] text-center flex justify-center items-center'
  const styleLight = 'text-color-primary hover:text-white bg-color-secondary-gray hover:bg-color-primary'
  const styleDark = 'text-white hover:text-color-primary bg-color-primary hover:bg-color-secondary-gray'
  const styleIntroduction = 'text-white hover:text-color-text-primary bg-color-text-primary hover:bg-color-secondary-gray'
  const className = `${width} ${height} ${classNameDefault} ${isIntroductionStyle ? styleIntroduction : isLightStyle ? styleLight : styleDark}`

  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>
      {text || children}
    </button>
  )
}
