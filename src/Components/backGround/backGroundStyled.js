import styled from 'styled-components'
import dogImg from '../../assets/img/dog-image.png'

const backGroundStyled = styled.div`
  background-repeat: no-repeat;
  z-index: -1;
  /* width: 100%; */
  height: 50%;
  position: absolute;
  left: 50%;
  background-image: url(${dogImg});
`
export default backGroundStyled
