import React, { Component, useState } from 'react'
import { Form, Formik, withFormik, Field } from 'formik'
import ClientInfoStyled from './shelterInfoStyled'
import { connect } from 'react-redux'

// const clientInfo = () => {
//   return (

//   )
// }

const initialState = {
  oneShelter: 'one',
  shelterName: '',
  amount: '',
}

const ShelterInfo = () => {
  const [state, newState] = useState({ ...initialState })

  const onChangeRadioButton = e => {
    newState({ ...state, oneShelter: e.target.value })
    // console.log(state)
  }

  return (
    <ClientInfoStyled>
      <Formik
        initialValues={{ ...initialState }}
        onSubmit={state => console.log(state)}
      >
        {({ values }) => (
          <Form className="container">
            <h2>Vyberte si možnosť, ako chcete pomôcť </h2>
            <Field component="div" name="myRadioGroup">
              <ul>
                <li>
                  <label htmlFor="radioOne" className="leftLabel">
                    Chcem finančne prispieť konkrétnemu útulku
                    <input
                      type="radio"
                      id="radioOne"
                      defaultChecked={values.myRadioGroup === 'one'}
                      onChange={onChangeRadioButton}
                      name="myRadioGroup"
                      value="one"
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="radioTwo" className="rightLabel">
                    Chcem finančne prispieť celej nadácii
                    <input
                      type="radio"
                      id="radioTwo"
                      defaultChecked={values.myRadioGroup === 'two'}
                      onChange={onChangeRadioButton}
                      name="myRadioGroup"
                      value="two"
                    />
                    Two
                  </label>
                </li>
              </ul>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </ClientInfoStyled>
  )
}

export default connect()(ShelterInfo)
