import React from 'react'
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Wrapper from './helpInfoStyled'
import yupSchema from './yupSchema'

const helpInfo = () => {
  return (
    <Wrapper className="container">
      <div className="backGround"></div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', tel: '' }}
        validationSchema={yupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form>
          <h3>Potrebujeme od Vás zopár informácií</h3>
          <p>O vás</p>
          <label htmlFor="firstName">Meno</label>
          <Field name="firstName" type="text" placeholder="Zadajte Vaše meno" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Priezvisko</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Zadajte Vaše priezvisko"
          />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">E-mailová adresa</label>
          <Field name="email" type="email" placeholder="Zadajte Váš e-mail" />
          <ErrorMessage name="email" />
          {/* 
          <label htmlFor="tel">Telefónne číslo</label>
          <Field name="tel" type="tel" />
          <ErrorMessage name="tel" /> */}
          <PhoneInput
            country={'us'}
            // value={this.state.phone}
            // onChange={phone => this.setState({ phone })
            // }
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
      </Formik>
    </Wrapper>
  )
}

export default helpInfo
