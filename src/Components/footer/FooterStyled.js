import styled from 'styled-components'
import separatot from '../../assets/img/separator.svg'
const FooterStyled = styled.footer`
  display: -webkit-box;
  padding-top: 10%;
  justify-content: space-between;
  height: 323px;
  margin-top: 169px;

  &:before {
    position: absolute;
    display: block;
    content: 'adsasdsad';
    height: 2px;
    width: 100%;
    background-image: url(${separatot});
    transform: translateY(-75px);
  }

  h3 {
    color: black;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.3;
  }
  p,
  a {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.3;
    color: #585757;
    margin: 0;

    width: 170px;
  }
  ul {
    margin: 0;
  }
  h3 {
    font-weight: 800;
  }
`
export default FooterStyled
