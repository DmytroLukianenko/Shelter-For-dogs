import styled from 'styled-components'
import on from '../../assets/img/on.svg'
import off from '../../assets/img/off.svg'
const ResultPageStyled = styled.section`
  /* padding-bottom: 100px; */
  h3 {
    /* max-width: 70% */
    font-family: Hind;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 1.13;
    /* or 113% */

    letter-spacing: 0.01em;

    margin-bottom: 42px;

    /* padding-bottom: 70px; */
  }
  h4 {
    font-family: Public Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 1.36;

    color: var(--main-text);

    margin-bottom: 8px;
  }
  p {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.19;

    color: var(--main-text);
  }
  ul {
    margin-bottom: 52px;
  }
  li {
    margin-bottom: 20px;
  }
  label {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.31;

    padding-left: 30px;

    color: #2f2f2f;
    opacity: 0.8;

    color: var(--main-text);
  }
  .labelOn::before {
    top: -8px;
    left: -20px;
    position: absolute;
    display: block;
    /* top: 80%; */
    content: '';
    width: 40px;
    height: 40px;
    background-image: url(${on});

    /* transform: translate(-5px, -28px); */
    z-index: -10;
  }
  .labelOff::before {
    top: -8px;
    left: -20px;
    position: absolute;
    display: block;
    /* top: 80%; */
    content: '';
    width: 40px;
    height: 40px;
    background-image: url(${off});

    /* transform: translate(-5px, -28px); */
    z-index: -10;
  }

  input {
    position: absolute;
    vertical-align: middle;
    opacity: 0;
    width: 40px;
    height: 40px;
    border: solid 5px red;
    transform: translate(-20px, -5px);

    z-index: 200;
  }
  .invalid-feedback {
    color: red;

    transform: translate(43px, 7px);
  }
  button {
    width: auto;
  }
  .buttonContainer {
    margin-top: 75px;
  }
  .form-group {
    position: relative;
  }
`

export default ResultPageStyled
