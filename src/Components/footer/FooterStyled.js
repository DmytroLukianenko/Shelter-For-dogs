import styled from 'styled-components'
import separatot from '../../assets/img/separator.svg'
const FooterStyled = styled.footer`
  display: -webkit-box;
  padding-top: 5%;
  justify-content: space-between;
  height: auto;
  /* margin-top: 169px; */

  &:before {
    position: absolute;
    display: block;
    content: '';
    height: 2px;
    width: 80%;
    background-image: url(${separatot});
    transform: translateY(-75px);
  }

  & h3 {
    color: black;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 24px;
  }
  & p,
  & a {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.3;
    color: #585757;
    margin: 0;

    width: 170px;
  }
  & ul {
    margin: 0;
  }
  .linkList {
    line-height: 2;
  }
`
export default FooterStyled
