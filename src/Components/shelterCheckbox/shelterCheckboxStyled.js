import styled from 'styled-components'

const shelterCheckboxStyled = styled.div`
  label,
  input {
    text-align: center;
    &:before {
      margin-left: auto;
      margin-right: auto;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    input,
    label {
      margin-top: 10px;
    }
  }
  .checkboxActive {
    color: white;
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    border-radius: 8px;
  }
  .checkboxContainer {
    margin-top: 15px;
    display: flex;
    justify-content: start;
  }
  .checkboxLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;

    height: 53px;

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

    transition: all 0.5s ease;

    :hover {
      background: #f0c5ae;
    }
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
  @media screen and (max-width: 767px) {
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      input,
      label {
        margin-top: 10px;
      }
    }
  }
`

export default shelterCheckboxStyled
