import React, { Component, useEffect, useState } from 'react'
import { Form, Formik, withFormik, Field } from 'formik'
import ClientInfoStyled from './shelterInfoStyled'
import { connect, useDispatch, useSelector } from 'react-redux'
import allShelters from '../../Redux/operations/operations'
import selectors from '../../Redux/seletors/selectors'

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
  const dispatch = useDispatch('')
  const selectorList = useSelector(selectors.allShelters)

  // selectorList.map(item => console.log(item.))
  // console.log(selectorList)

  // useEffect(() => {
  //   dispatch(allShelters())
  // }, [])
  const tryList = selectorList.map(item => {
    return <option value={item.name} label={item.name} id={item.id} />
  })

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
                      defaultChecked={values.oneShelter === 'one'}
                      onChange={onChangeRadioButton}
                      name="oneShelter"
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
                      defaultChecked={values.oneShelter === 'two'}
                      onChange={onChangeRadioButton}
                      name="oneShelter"
                      value="two"
                    />
                  </label>
                </li>
              </ul>
            </Field>
            {/* <label htmlFor="email" style={{ display: 'block' }}>
              Color
            </label> */}
            <select name="shelter" value={state.shelterName}>
              {tryList}
            </select>
            <button type="submit">streliay</button>
          </Form>
        )}
      </Formik>
    </ClientInfoStyled>
  )
}

export default connect()(ShelterInfo)
