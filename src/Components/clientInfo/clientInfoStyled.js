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
    /* or 131% */

    color: #585757;
  }
  .leftLabel {
    border-radius: 24px 0px 0px 24px;
    ::before {
      display: block;
      content: '';
      width: 80px;
      height: 80px;
      background-image: url(${walleticon});
    }
  }
  .rightLabel {
    border-radius: 0px 24px 24px 0px;
    ::before {
      display: block;
      content: '';
      width: 80px;
      height: 80px;
      background-image: url(${pawicon});
    }
  }
  input {
    display: none;
  }
`

export default clientInfoStyled
