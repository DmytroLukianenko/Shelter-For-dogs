import styled from 'styled-components'

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 323px;
  /* padding: 150px 150px 50px; */
  p,
  a,
  h3 {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.3;

    margin: 0;

    width: 170px;
  }
  ul {
    margin: 0;
  }
  h3 {
    font-weight: 800;
  }
`
export default FooterStyled
