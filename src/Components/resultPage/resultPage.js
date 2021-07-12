import { connect, useDispatch, useSelector } from 'react-redux'
import selectors from '../../Redux/seletors/selectors'
import ResultPageStyled from './resultPageStyled'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ButtonBack, ButtonNext } from '../button/Button'
import Footer from '../footer/Footer'
import Background from '../backGround/backGround'
import { useHistory } from 'react-router-dom'
import { postInfoOperation } from '../../Redux/operations/operations'
// import { boolean } from 'yup/lib/locale'

const ResultPage = () => {
  const firstName = useSelector(selectors.firstName)
  const lastName = useSelector(selectors.lastName)
  const phone = useSelector(selectors.phone)
  const email = useSelector(selectors.email)
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
            acceptterms: 'false',
          }}
          validationSchema={Yup.object().shape({
            acceptterms: Yup.string().oneOf(
              ['true'],
              'Spracúvanie osobných údajov je povinné'
            ),
          })}
        >
          {({ errors, touched, values, dirty, isValid }) => (
            <Form>
              <div className="form-group form-check">
                <Field
                  type="checkbox"
                  name="acceptterms"
                  acceptterms={values.acceptterms.toString()}
                  className={
                    'form-check-input ' +
                    (errors.acceptterms && isValid.acceptterms
                      ? ' is-invalid'
                      : '')
                  }
                />
                <label
                  htmlFor="acceptterms"
                  className={!values.acceptterms ? 'labelOn' : 'labelOff'}
                >
                  Súhlasím so spracovaním mojich osobných údajov
                </label>
                <ErrorMessage
                  name="acceptterms"
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
                  disabled={isValid}
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
