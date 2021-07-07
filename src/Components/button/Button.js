import ButtonBackStyled from './buttonBackStyled'
import ButtonNextStyled from './buttonNextStyled'

export const ButtonNext = ({ text }) => {
  return <ButtonNextStyled type="submit">{text}</ButtonNextStyled>
}
export const ButtonBack = () => {
  return <ButtonBackStyled type="button"></ButtonBackStyled>
}
