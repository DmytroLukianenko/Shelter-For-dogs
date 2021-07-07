import ButtonBackStyled from './buttonBackStyled'
import ButtonNextStyled from './buttonNextStyled'

export const ButtonNext = ({ text, type }) => {
  return <ButtonNextStyled type={type}>{text}</ButtonNextStyled>
}
export const ButtonBack = ({ text, type }) => {
  return <ButtonBackStyled type={type}>{text}</ButtonBackStyled>
}
