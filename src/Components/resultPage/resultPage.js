import { connect, useDispatch, useSelector } from 'react-redux'
import { object } from 'yup'
import selectors from '../../Redux/seletors/selectors'
import store from '../../Redux/store'
import ResultPageStyled from './resultPageStyled'
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik'
import * as Yup from 'yup'
import { ButtonBack, ButtonNext } from '../button/Button'
import Footer from '../footer/Footer'
import Background from '../backGround/backGround'
import { useHistory } from 'react-router-dom'
import on from '../../assets/img/on.svg'
import off from '../../assets/img/off.svg'
import shelterActions from '../../Redux/actions/actions'
import { postInfoOperation } from '../../Redux/operations/operations'

const ResultPage = () => {
  const firstName = useSelector(selectors.firstName)
  const lastName = useSelector(selectors.lastName)
  const phone = useSelector(selectors.phone)
  const email = useSelector(selectors.email)
  console.log(firstName)
  // const shelterObject = useSelector(state => state.clientReducer)
  const error = 'Pole nebolo vyplnené'
  const amount = useSelector(selectors.amount)
  const selectedShelter = useSelector(selectors.selectedShelter)
  const oneShelter = useSelector(selectors.oneShelter)
  const dispatch = useDispatch('')
  const history = useHistory()

  const GoBack = () => history.goBack()

  const handleClick = () => {
    dispatch(postInfoOperation(firstName, lastName, phone, amount, email))
  }

  // const resultList = () => {
  //   for (const item in shelterObject) {
  //     return <li key={item}>{shelterObject[item]}</li>
  //     // if (Object.hasOwnProperty.call(shelterObject, key)) {
  //     //   const element = object[key]
  //     //   return <li key={element.index}>{element}</li>
  //     // }
  //   }
  // }
  // console.log(resultList())
  // console.log(shelterObject)

  return (
    <>
      <ResultPageStyled className="container">
        <Background />
        <h3>Skontrolujte si zadané údaje</h3>
        <ul className="list">
          <li>
            <h4>Akou formou chcem pomôcť</h4>
            <p>{oneShelter ? oneShelter : error}</p>
          </li>
          <li>
            <h4>Najviac mi záleží na útulku</h4>
            <p>{selectedShelter ? selectedShelter : error}</p>
          </li>
          <li>
            <h4>Suma ktorou chcem pomôcť</h4>
            <p>{amount ? amount + ' €' : error}</p>
          </li>
          <li>
            <h4>Meno a priezvisko</h4>
            <p>{firstName || lastName ? firstName + lastName : error}</p>
          </li>
          <li>
            <h4>E-mailová adresa</h4>
            <p>{email ? email : error}</p>
          </li>
          <li>
            <h4>Telefónne číslo</h4>
            <p>{phone ? phone : error}</p>
          </li>
        </ul>
        <Formik
          initialValues={{
            acceptTerms: false,
          }}
          validationSchema={Yup.object().shape({
            acceptTerms: Yup.bool().oneOf(
              [true],
              'Spracúvanie osobných údajov je povinné'
            ),
          })}
          // onSubmit={e => {
          //   console.log(e)

          //   // dispatch(
          //   //   postInfoOperation(firstName, lastName, phone, value, email)
          //   // )
          // }}
        >
          {({ errors, touched, values, dirty }) => (
            <Form>
              <div className="form-group form-check">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  acceptTerms={values.acceptTerms}
                  // value={touched.acceptTerms}
                  className={
                    'form-check-input ' +
                    (errors.acceptTerms && touched.acceptTerms
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label
                  htmlFor="acceptTerms"
                  for="acceptTerms"
                  // className="form-check-label"
                  className={values.acceptTerms ? 'labelOn' : 'labelOff'}
                >
                  Súhlasím so spracovaním mojich osobných údajov
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="buttonContainer">
                <ButtonBack
                  text="Späť"
                  type="button"
                  onClick={GoBack}
                  alt="button back"
                ></ButtonBack>
                <ButtonNext
                  text="Odoslať formulár"
                  type="submit"
                  disabled={!dirty}
                  onClick={handleClick}
                ></ButtonNext>
              </div>
            </Form>
          )}
        </Formik>
      </ResultPageStyled>
      <Footer />
    </>
  )
}

export default connect()(ResultPage)
