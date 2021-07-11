import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect, useDispatch } from 'react-redux'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Wrapper from './clientInfoStyled'
import { clientInfoAction } from '../../Redux/actions/actions'
import { ButtonBack, ButtonNext } from '../button/Button'
import Footer from '../footer/Footer'
import { useHistory } from 'react-router-dom'
import yupSchema from './yupSchema'
import BackGround from '../backGround/backGround'

// import yupSchema from './yupSchema'
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

function ClientInfoForm() {
  const dispatch = useDispatch()
  const history = useHistory()

  const GoBack = () => history.goBack()

  return (
    <>
      <Wrapper className="container">
        <BackGround></BackGround>
        <Formik
          initialValues={{ ...initialState }}
          validationSchema={yupSchema}
          onSubmit={values =>
            dispatch(clientInfoAction(values), history.push('/result'))
          }
        >
          {({
            values,
            value,
            handleChange,
            setFieldValue,
            dirty,
            isValid,
            errors,
          }) => (
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
              <div className="error">
                <ErrorMessage name="firstName" />
              </div>

              <label htmlFor="lastName">Priezvisko</label>
              <Field
                name="lastName"
                type="text"
                placeholder="Zadajte Vaše priezvisko"
                value={values.lastName}
                onChange={handleChange}
              />
              <div className="error">
                <ErrorMessage name="lastName" />
              </div>

              <label htmlFor="email">E-mailová adresa</label>
              <Field
                name="email"
                type="email"
                placeholder="Zadajte Váš e-mail"
                value={values.email}
                onChange={handleChange}
              />
              <div className="error">
                {' '}
                <ErrorMessage name="email" />
              </div>
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
                <ButtonBack
                  text="Späť"
                  type="button"
                  onClick={GoBack}
                  alt="button back"
                ></ButtonBack>
                <ButtonNext
                  name="button"
                  className="button"
                  text="Pokračovať"
                  type="submit"
                  alt="button next"
                  disabled={!(isValid && dirty)}
                  onChange={handleChange}
                ></ButtonNext>
                <ErrorMessage
                  render={msg => <div>{msg.name}</div>}
                ></ErrorMessage>
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
