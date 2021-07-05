import React, { Component, useEffect, useState } from 'react'
import { Form, Formik, withFormik, Field, setFieldValue } from 'formik'
import ClientInfoStyled from './shelterInfoStyled'
import { connect, useDispatch, useSelector } from 'react-redux'
import allShelters from '../../Redux/operations/operations'
import selectors from '../../Redux/seletors/selectors'
import shelterActions from '../../Redux/actions/actions'

// const clientInfo = () => {
//   return (

//   )
// }

const initialState = {
  oneShelter: 'one',
  selectedShelter: '',
  shelters: [],
  amount: '',
  checked: [],
}

const ShelterInfo = () => {
  const [state, newState] = useState({ ...initialState })
  const dispatch = useDispatch('')
  const selectorList = useSelector(selectors.allShelters)

  const selectList = selectorList.map(item => {
    return <option value={item.name} label={item.name} key={item.id} />
  })

  const onChangeRadioButton = e => {
    newState({ ...state, oneShelter: e.target.value })
  }

  return (
    <ClientInfoStyled>
      <Formik
        initialValues={{ ...initialState }}
        onSubmit={values => {
          // console.log(values)
          dispatch(shelterActions.shelterInfoAction(values))
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
        }) => (
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
                      onChange={values => console.log(values)}
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
                      defaultChecked={values.oneShelter === 'all'}
                      onChange={onChangeRadioButton}
                      name="oneShelter"
                      value="all"
                    />
                  </label>
                </li>
              </ul>
            </Field>
            {/* <label htmlFor="email" style={{ display: 'block' }}>
              Color
            </label> */}
            <select
              name="selectedShelter"
              value={values.selectedShelter}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" label="Choose a Shelter" />
              {selectList}
            </select>
            {errors.color && touched.color && (
              <div className="input-feedback">{errors.color}</div>
            )}
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="5"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                5 €
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="10"
                  // onChange={handleChange}
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                  // onBlur={handleBlur}
                />
                10 €
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="20"
                  // onChange={handleChange}
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                20 €
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="30"
                  // onChange={handleChange}
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                30 €
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="50"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                  // onChange={handleChange}
                  // onBlur={value => {
                  //   if (values.checked.length > 0) {
                  //     setFieldValue('checked', value.target.value)
                  //   }
                  // }}
                />
                50 €
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="100"
                  // onChange={handleChange}
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                  // dirty={true}
                  // disable={disable}
                />
                100 €
              </label>
              <Field
                name="amount"
                type="amount"
                placeholder="______ €"
                value={values.checked}
                onChange={value => {
                  if (values.checked.length >= 0) {
                    setFieldValue('checked', [value.target.value])
                  } else {
                    setFieldValue('checked', [])
                  }
                }}
              ></Field>
            </div>
            <button type="submit">trax </button>
          </Form>
        )}
      </Formik>
    </ClientInfoStyled>
  )
}

export default connect()(ShelterInfo)
