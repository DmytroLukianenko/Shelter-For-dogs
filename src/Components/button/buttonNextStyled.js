import styled from 'styled-components'

const buttonNextStyled = styled.button`
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 24px;
  left: 50%;
  transition: all 0.5s ease;
  height: 59px;

  color: white;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  border: 0;
  color: -internal-light-dark(rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3));
  background-color: -internal-light-dark(
    rgba(239, 239, 239, 0.3),
    rgba(19, 1, 1, 0.3)
  );
  border-color: -internal-light-dark(
    rgba(118, 118, 118, 0.3),
    rgba(195, 195, 195, 0.3)
  );

  &:hover {
    color: black;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 100px;
  }
`

export default buttonNextStyled
