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
    <Wrapper className="container">
      <div className="backGround"></div>
      <Formik
        initialValues={{ ...initialState }}
        // validationSchema={yupSchema}
        onSubmit={values => dispatch(clientInfoAction(values))}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <h3>Potrebujeme od Vás zopár informácií</h3>
            <p>O vás</p>

            <label htmlFor="firstName">Meno</label>
            <Field
              name="firstName"
              type="text"
              placeholder="Zadajte Vaše meno"
              value={values.firstName}
              // onChange={onChange}
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

            <ReactPhoneInput
              country={'sk'}
              onlyCountries={['cz', 'sk']}
              name="phone"
              type="phone"
              value={values.phone}
              onChange={e => setFieldValue('phone', e)}
              // onChange={this.onPhoneChange}
            />

            <div className="buttonContainer">
              <button type="submit" className="buttonBack">
                Späť{' '}
              </button>
              <button type="submit" className="buttonSend">
                Pokračovať{' '}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default connect()(ClientInfoForm)
