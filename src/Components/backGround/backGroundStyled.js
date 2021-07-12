import styled from 'styled-components'
import dogImg from '../../assets/img/dog-image.png'

const backGroundStyled = styled.div`
  overflow: hidden;
  background-repeat: no-repeat;
  z-index: -1;
  width: 492px;
  height: 100%;
  position: absolute;
  left: 50%;
  background-image: url(${dogImg});
  @media screen and (max-width: 767px) {
    left: 30%;
  }
  @media screen and (min-width: 1440px) {
    left: 60%;
  }
`
export default backGroundStyled
