import styled from 'styled-components'
import walleticon from '../../assets/img/walleticon.svg'
import pawicon from '../../assets/img/pawicon.svg'

const shelterRadioStyled = styled.div`
  input {
    display: none;
  }
  ul {
    padding: 0;
    height: 186px;
    width: 557px;
  }
  li {
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  .leftLabel {
    display: block;
    min-width: 100%;
    min-height: 100%;
    background: #faf9f9;
    border: 1px solid #cd8b65;
    box-sizing: border-box;

    padding: 24px 25px 23px 25px;

    font-family: Public Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.31;
    border-radius: 24px 0px 0px 24px;
    color: #585757;
    transition: all 0.5s ease;
    ::before {
      display: block;
      content: '';
      width: 80px;
      height: 80px;
      background-image: url(${walleticon});
    }
    :hover {
      background: #f0c5ae;
    }
  }

  .rightLabel {
    display: block;
    min-width: 100%;
    min-height: 100%;
    background: #faf9f9;
    border: 1px solid #cd8b65;
    box-sizing: border-box;

    padding: 24px 25px 23px 25px;

    font-family: Public Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.31;
    border-radius: 0px 24px 24px 0px;
    transition: all 0.5s ease;

    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 0px 24px 24px 0px;
    ::before {
      display: block;
      content: '';
      width: 80px;
      height: 80px;
      background-image: url(${pawicon});
    }
    :hover {
      background: #f0c5ae;
    }
  }

  .active {
    color: white;
    fill: white;
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 100px;

    ul {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .rightLabel {
      padding: 24px 25px 23px 25px;
      &:before {
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      width: 70%;
    }
  }
`
export default shelterRadioStyled
