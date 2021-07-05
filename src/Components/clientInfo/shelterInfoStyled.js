import styled from 'styled-components'
import pawicon from '../../assets/img/pawicon.svg'
import walleticon from '../../assets/img/walleticon.svg'

const clientInfoStyled = styled.section`
  display: flex;
  h2 {
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 1.13;
    /* or 113% */
    letter-spacing: 0.01em;
  }
  ul {
    /* width: 200px;
    height: 200px;
    background-color: salmon; */
    height: 186px;
    width: 557px;
  }
  li {
    display: inline-block;
    width: 50%;
    height: 100%;

    /* background: #faf9f9;
    border: 1px solid #cd8b65;
    box-sizing: border-box;

    &:first-child {
      border-radius: 24px 0px 0px 24px;
    }
    &:last-child {
      border-radius: 0px 24px 24px 0px;
    } */
  }
  label {
    /* or 131% */

    color: #585757;
    /* &::content {
      background-color: red;
    } */
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
    ::before {
      display: block;
      content: '';
      width: 80px;
      height: 80px;
      background-image: url(${walleticon});
    }
  }
  #checkbox:checked {
    background-color: red;
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
  }
  /* input {
    display: none;
  } */
`

export default clientInfoStyled
