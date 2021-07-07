import styled from 'styled-components'
import pawicon from '../../assets/img/pawicon.svg'
import walleticon from '../../assets/img/walleticon.svg'

const clientInfoStyled = styled.section`
  display: flex;
  h2 {
    width: 50%;
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 1.13;
    /* or 113% */
    letter-spacing: 0.01em;

    margin-bottom: 28px;
  }
  h3 {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.19px;
  }
  h4 {
  }
  ul {
    /* width: 200px;
    height: 200px;
    background-color: salmon; */
    height: 186px;
    width: 557px;
  }
  p {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.31;

    position: absolute;
    transform: translateY(-517%);
    padding-left: 30px;
  }
  li {
    display: inline-block;
    width: 50%;
    height: 100%;
  }

  label {
    /* or 131% */
    /* background: red; */
    color: #585757;
    &:checked {
      background: red;
    }
    &:focus {
      background: red;
    }

    /* &::content {
      background-color: red;
    } */
    /* &:focus,
    &: {
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

  input {
    /* display: none; */
  }

  .active {
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  }
  .activeLeft {
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  }
  .titleContainer {
    display: flex;
    width: 50%;
    justify-content: space-between;

    margin-top: 56px;
  }
  select {
    background: #ffffff;
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: 8px;

    color: #9f9f9f;

    width: 557px;
    height: 74px;

    margin-top: 15px;
    margin-bottom: 40px;

    padding: 16px 25px;
  }
  .selectLabel {
    position: absolute;
    padding-left: 30px;
    transform: translateY(25px);
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.31;
    /* identical to box height, or 131% */

    color: #2f2f2f;
  }
  .checkboxContainer {
    margin-top: 15px;
    display: flex;
  }
  .checkboxLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;

    height: 53px;

    background: #ffffff;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
    order: 0;
    flex-grow: 0;
    margin-right: 6px;

    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.31;

    /* display: none; */
  }
  .hideCheck {
    display: none;
  }
  .amountInput {
    text-align: center;

    width: 86px;
    height: 53px;

    padding: 16px;

    background: #ffffff;
    border: 1px solid #dfdfdf;
    box-sizing: border-box;
    border-radius: 8px;
  }
  button {
    margin-top: 70px;
    &:focus {
      background-color: red;
      outline: none;
      box-shadow: 0px 0px 2px red;
    }
  }
  option {
    background: none repeat scroll 0 0 transparent;
    border: 0 none;
    overflow: hidden;
    width: 100%;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px red;
    }
  }
  .checkboxActive {
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    border-radius: 8px;
  }
`

export default clientInfoStyled
