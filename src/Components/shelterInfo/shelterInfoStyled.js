import styled from 'styled-components'
import firstpage from '../../assets/img/firstpage.svg'
const shelterIngoStyled = styled.section`
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
    &::before {
      display: block;
      position: absolute;
      content: '';
      width: 95px;
      height: 6px;
      background: url(${firstpage});
      top: 25px;
    }
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

  .titleContainer {
    display: flex;
    width: 70%;
    justify-content: space-between;

    margin-top: 56px;
  }

  button {
    margin-top: 70px;
    &:disabled {
      opacity: 0.5;
    }
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
  @media screen and (max-width: 767px) {
    padding-bottom: 100px;
    form,
    h2 {
      width: 100%;
    }
    .titleContainer {
      width: 100%;
    }

    button {
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
  }
  @media screen and (min-width: 768px) {
    .titleContainer {
      width: 557px;
    }
  }
  @media screen and (min-width: 1440px) {
    /* ul {
      max-width: 70%;
    } */
    .titleContainer {
      width: 70%;
    }
  }
`

export default shelterIngoStyled
