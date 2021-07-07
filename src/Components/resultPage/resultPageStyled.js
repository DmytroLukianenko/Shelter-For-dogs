import styled from 'styled-components'
const ResultPageStyled = styled.section`
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
  li {
    margin-bottom: 20px;
  }
  label {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.31;
    /* identical to box height, or 131% */

    color: var(--main-text);
  }
`
export default ResultPageStyled
