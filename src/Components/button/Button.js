import ButtonBackStyled from './buttonBackStyled'
import ButtonNextStyled from './buttonNextStyled'

export const ButtonNext = ({ text, type, ...props }) => {
  return (
    <ButtonNextStyled type={type} {...props}>
      {text}
    </ButtonNextStyled>
  )
}
export const ButtonBack = ({ text, type, ...props }) => {
  return (
    <ButtonBackStyled type={type} {...props} alt="button back">
      {text}
    </ButtonBackStyled>
  )
}
