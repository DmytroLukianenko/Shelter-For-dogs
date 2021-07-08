import React, { Component, useState } from 'react'
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  validateYupSchema,
  useFormik,
  setFieldValue,
} from 'formik'
import { connect, useDispatch } from 'react-redux'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Wrapper from './clientInfoStyled'
import { clientInfoAction } from '../../Redux/actions/actions'
import { ButtonBack, ButtonNext } from '../button/Button'
import Footer from '../footer/Footer'
import { useHistory } from 'react-router-dom'
import phoneInput from '../inputField/inputField'
import yupSchema from './yupSchema'
import ResultPage from '../resultPage/resultPage'
import store from '../../Redux/store'

// import yupSchema from './yupSchema'
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

function ClientInfoForm() {
  const [state, newState] = useState({ ...initialState })
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = state => {
    dispatch(clientInfoAction(state))
    console.log(state)
  }

  // const onChange = e => {
  //   newState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   })
  //   console.log(state)
  // }

  return (
    <>
      <Wrapper className="container">
        <div className="backGround"></div>
        <Formik
          initialValues={{ ...initialState }}
          // validationSchema={yupSchema}
          onSubmit={values =>
            dispatch(clientInfoAction(values), history.push('/result'))
          }
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form>
              <h2>Potrebujeme od Vás zopár informácií</h2>
              <p>O vás</p>

              <label htmlFor="firstName">Meno</label>
              <Field
                name="firstName"
                type="text"
                placeholder="Zadajte Vaše meno"
                value={values.firstName}
                onChange={handleChange}
              />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName">Priezvisko</label>
              <Field
                name="lastName"
                type="text"
                placeholder="Zadajte Vaše priezvisko"
                value={values.lastName}
                // onChange={onChange}
                onChange={handleChange}
              />
              <ErrorMessage name="lastName" />

              <label htmlFor="email">E-mailová adresa</label>
              <Field
                name="email"
                type="email"
                placeholder="Zadajte Váš e-mail"
                value={values.email}
                // onChange={onChange}
                onChange={handleChange}
              />
              <ErrorMessage name="email" />
              <label for="phone">Telefónne číslo</label>
              <ReactPhoneInput
                country={'sk'}
                onlyCountries={['cz', 'sk']}
                name="phone"
                type="phone"
                value={values.phone}
                inputProps={{
                  name: 'phone',
                  country: 'sk',
                  required: true,
                  autoFocus: true,
                }}
                onChange={e => setFieldValue('phone', e)}
                containerStyle={{}}
                inputStyle={{
                  border: 'none',
                }}
                required
              />
              <div className="buttonContainer">
                <ButtonBack text="Späť" type="button"></ButtonBack>
                <ButtonNext text="Pokračovať" type="submit"></ButtonNext>
              </div>
            </Form>
          )}
        </Formik>
      </Wrapper>
      <Footer />
    </>
  )
}

export default connect()(ClientInfoForm)
