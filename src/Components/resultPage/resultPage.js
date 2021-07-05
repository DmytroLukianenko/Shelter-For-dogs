import { connect, useSelector } from 'react-redux'
import selectors from '../../Redux/seletors/selectors'
import store from '../../Redux/store'
import ResultPageStyled from './resultPageStyled'

const ResultPage = () => {
  const firstName = useSelector(selectors.firstName)
  const lastName = useSelector(selectors.lastName)
  const phone = useSelector(selectors.phone)
  const email = useSelector(selectors.email)

  const amount = useSelector(selectors.amount)
  const selectedShelter = useSelector(selectors.selectedShelter)
  const oneShelter = useSelector(selectors.oneShelter)

  return (
    <ResultPageStyled className="container">
      <h3>Skontrolujte si zadané údaje</h3>
      <ul>
        <li>
          <h4>Akou formou chcem pomôcť</h4>
          <p>{oneShelter}</p>
        </li>
        <li>
          <h4>Najviac mi záleží na útulku</h4>
          <p>{selectedShelter}</p>
        </li>
        <li>
          <h4>Suma ktorou chcem pomôcť</h4>
          <p>{amount}</p>
        </li>
        <li>
          <h4>Meno a priezvisko</h4>
          <p>
            {firstName}
            {lastName}
          </p>
        </li>
        <li>
          <h4>E-mailová adresa</h4>
          <p>{email}</p>
        </li>
        <li>
          <h4>Telefónne číslo</h4>
          <p>{phone}</p>
        </li>
      </ul>
    </ResultPageStyled>
  )
}

export default connect()(ResultPage)
