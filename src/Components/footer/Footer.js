import FooterStyled from './FooterStyled'
import Logo from '../logo/Logo'

const footer = () => {
  return (
    <FooterStyled className="container">
      <div>
        <Logo />
      </div>
      <div>
        <h3>Nadácia Good boy</h3>
        <ul>
          <li>
            <a href="/">O projekte</a>
          </li>
          <li>
            <a href="/">Ako na to</a>
          </li>
          <li>
            <a href="/">Kontakt</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Nadácia Good boy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{' '}
        </p>
      </div>
      <div>
        <h3>Nadácia Good boy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.{' '}
        </p>
      </div>
    </FooterStyled>
  )
}

export default footer
