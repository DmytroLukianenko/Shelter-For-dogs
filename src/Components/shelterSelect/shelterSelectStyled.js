import styled from 'styled-components'

const shelterSelectStyled = styled.div`
  display: flex;
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

    padding: 25px 25px 16px;
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

    color: #2f2f2f;
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
  @media screen and (min-width: 1440px) {
    select {
      width: 100%;
    }
  }
`

export default shelterSelectStyled
