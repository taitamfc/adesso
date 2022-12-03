

import { ButtonCommon, ButtonStyles, ButtonType } from "./Button";

type Props = {
  children?: React.ReactNode
  text?: string
  width?: string
  height?: string
  style?: ButtonStyles
  isLoading?: boolean
  disabled?: boolean
  onClick: () => void
}

export const SubmitButtonCommon = ({ children, text, width, height, isLoading, style = ButtonStyles.Light, disabled, onClick }: Props) => {
  const iconLoading = (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
  
  const buttonContent = isLoading ? iconLoading : (text || children || '')

  return (
    <ButtonCommon 
      style={style} 
      width={width} 
      height={height}
      type={ButtonType.Submit} 
      disabled={isLoading || disabled} 
      onClick={onClick}
    >
      {buttonContent}
    </ButtonCommon>
  );
}