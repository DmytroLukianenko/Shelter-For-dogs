import { connect, useSelector } from 'react-redux'
import store from '../../Redux/store'

const ResultPage = props => {
  //   const { firstName } = this.state
  // const { firstName, lasName, email, phone } = store.getState()
  const imya = useSelector(state => state.clientReducer.firstName)
  console.log(imya)
  // const { firstName, lasName, email, phone } = state
  console.log(store.getState())
  return (
    <>
      <h3>Skontrolujte si zadané údaje</h3>
      <p>{imya}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </>
  )
}

const mapStateToProps = {
  // firstName: state.clientReducer.firstName,
}
export default connect(null, mapStateToProps)(ResultPage)
