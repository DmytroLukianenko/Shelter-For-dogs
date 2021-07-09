import styled from 'styled-components'
import separatot from '../../assets/img/separator.svg'
const FooterStyled = styled.footer`
  display: -webkit-box;
  padding-top: 5%;
  justify-content: space-between;
  height: auto;

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
  @media screen and (max-width: 768px) {
    text-align: center;
    display: block;
    margin-top: 100px;
    img,
    p {
      margin-left: auto;
      margin-right: auto;
    }
    &:before {
      width: 60%;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    padding-bottom: 100px;
    &:before {
      width: 90%;
    }
  }
  @media screen and (min-width: 1280px) {
    &:before {
      width: 80%;
    }
  }
`
export default FooterStyled
