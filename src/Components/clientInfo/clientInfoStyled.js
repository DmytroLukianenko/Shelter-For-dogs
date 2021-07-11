import styled from 'styled-components'
import secondpage from '../../assets/img/secondpage.svg'

const Wrapper = styled.section`
  padding-bottom: 169px;

  form {
    width: 550px;
  }
  label {
    position: absolute;
    transform: translate(25px, 10px);

    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    z-index: 10;
  }
  input {
    width: 100%;
    background: #ffffff;
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: 8px;

    width: 557px;
    height: 74px;

    margin-bottom: 16px;

    padding: 37px 24px 16px 24px;
  }
  .error {
    transform: translateY(-12px);
    color: red;
    font-weight: bold;

    display: block;

    padding: 0.5rem 0.75rem;
    margin-top: 0.5rem;
    white-space: pre-line;
  }
  /* =======================================phone input =================== */
  .react-tel-input {
    border: 1px solid #cd8b65;
    box-sizing: border-box;
    border-radius: 8px;
    width: 557px;
    height: 74px;
    padding: 16px 25px;

    background: white;
  }
  .flag-dropdown {
    border: none;
    background: transparent;
  }
  .react-tel-input .flag-dropdown.open {
    background: transparent;
  }
  .selected-flag {
    transform: translateY(10%);
    background: transparent;
  }
  .form-control {
    transform: translateY(-15%);
  }
  /* ============================= -======================= */
  h2 {
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 1.13;

    letter-spacing: 0.01em;
    margin-bottom: 42px;
    &::before {
      display: block;
      position: absolute;
      content: '';
      width: 95px;
      height: 6px;
      background: url(${secondpage});
      top: 25px;
    }
  }
  p {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 1.36;

    margin-bottom: 13px;
  }
  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 68px;
  }
  .buttonBack {
    padding: 20px 24px;

    width: 81px;
    height: 59px;

    background: #f3e2d9;
    border-radius: 100px;
    border: none;
  }
  .buttonSend {
    padding: 20px 24px;

    width: 124px;
    height: 59px;

    background: #9f9f9f;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
    border: none;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 0;
    form {
      width: 100%;
    }
    input,
    .react-tel-input {
      width: 80%;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`
export default Wrapper
