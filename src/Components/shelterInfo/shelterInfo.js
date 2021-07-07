import React, { Component, useEffect, useState } from 'react'
import { Form, Formik, withFormik, Field } from 'formik'
import ClientInfoStyled from './shelterInfoStyled'
import { connect, useDispatch, useSelector } from 'react-redux'
import allShelters from '../../Redux/operations/operations'
import selectors from '../../Redux/seletors/selectors'
import shelterActions, { clientInfoAction } from '../../Redux/actions/actions'
import { useHistory } from 'react-router-dom'
import { ButtonNext } from '../button/Button'
import { boolean } from 'yup'

// const clientInfo = () => {
//   return (

//   )
// }

const initialState = {
  oneShelter: '',
  selectedShelter: '',
  shelters: [],
  amount: '',
  checked: [],
}

const ShelterInfo = () => {
  const [state, newState] = useState({ ...initialState })
  const dispatch = useDispatch('')
  const history = useHistory()
  const selectorList = useSelector(selectors.allShelters)
  // console.log(value)
  function myFunc(e) {
    // if (e.target.id === 'radioOne') {
    //   e.target.labels[0].className = 'leftLabel active'
    // } else {
    // }
  }

  useEffect(() => {
    dispatch(allShelters())
  }, [])

  const selectList = selectorList.map(item => {
    return <option value={item.name} label={item.name} key={item.id} />
  })

  const onChangeRadioButton = e => {
    newState({ ...state, oneShelter: e.target.value })
  }

  return (
    <ClientInfoStyled>
      <div className="backGround"></div>
      <Formik
        initialValues={{ ...initialState }}
        // console.log(value)
        onSubmit={values => {
          console.log(values)
          // dispatch(shelterActions.shelterInfoAction(values))
          // history.push('/clientInfo')
        }}
      >
        {({
          value,
          style,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
          className,
          testim,
        }) => (
          <Form className="container">
            <h2>Vyberte si možnosť, ako chcete pomôcť </h2>
            <Field component="div" name="myRadioGroup" onChange={handleChange}>
              <ul>
                <li>
                  <label
                    htmlFor="radioOne"
                    className={
                      values.oneShelter === '1'
                        ? 'leftLabel active'
                        : 'leftLabel'
                    }
                  >
                    Chcem finančne prispieť konkrétnemu útulku
                    <input
                      type="radio"
                      id="radioOne"
                      name="oneShelter"
                      value="1"
                      defaultChecked={values.oneShelter === value}
                    />
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="radioTwo"
                    className={
                      values.oneShelter === '2'
                        ? 'rightLabel active'
                        : 'rightLabel'
                    }
                  >
                    Chcem finančne prispieť celej nadácii
                    <input
                      type="radio"
                      id="radioTwo"
                      name="oneShelter"
                      value="2"
                      defaultChecked={values.oneShelter === value}
                    />
                  </label>
                </li>
              </ul>
            </Field>
            <div className="titleContainer">
              <h3>O projekte</h3>
              <h4>Nepovinné</h4>
            </div>
            <select
              name="selectedShelter"
              value={values.selectedShelter}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option
                className="selectPlaceholder"
                value=""
                label="Vyberte útulok zo zoznamu"
              />
              {selectList}
            </select>
            <p>Utulok</p>
            {errors.color && touched.color && (
              <div className="input-feedback">{errors.color}</div>
            )}
            <h3>Suma, ktorou chcem prispieť</h3>
            <div
              className="checkboxContainer"
              role="group"
              aria-labelledby="checkbox-group"
            >
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
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
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
                  type="checkbox"
                  name="checked"
                  value="10"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                10 €
              </label>
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
                  type="checkbox"
                  name="checked"
                  value="20"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                20 €
              </label>
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
                  type="checkbox"
                  name="checked"
                  value="30"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                30 €
              </label>
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
                  type="checkbox"
                  name="checked"
                  value="50"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                50 €
              </label>
              <label className="checkboxLabel">
                <Field
                  className="hideCheck"
                  type="checkbox"
                  name="checked"
                  value="100"
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                    }
                  }}
                />
                100 €
              </label>
              <Field
                className="amountInput"
                name="input"
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
            {/* <button type="submit">Pokračovať </button> */}
            <ButtonNext text="Pokračovať"> </ButtonNext>
          </Form>
        )}
      </Formik>
    </ClientInfoStyled>
  )
}

export default connect()(ShelterInfo)
