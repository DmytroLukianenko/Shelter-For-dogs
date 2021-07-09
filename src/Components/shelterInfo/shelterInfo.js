import React, { useEffect } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import ClientInfoStyled from './shelterInfoStyled'
import { connect, useDispatch, useSelector } from 'react-redux'
import allShelters from '../../Redux/operations/operations'
import selectors from '../../Redux/seletors/selectors'
import shelterActions from '../../Redux/actions/actions'
import { useHistory } from 'react-router-dom'
import { ButtonNext } from '../button/Button'
import Background from '../backGround/backGround'
import Footer from '../footer/Footer'
import shelterYupSchema from './yupSchema'
import store from '../../Redux/store'

const initialState = {
  oneShelter: '',
  selectedShelter: '',
  shelters: [],
  amount: '',
  checked: [],
}

const ShelterInfo = () => {
  const dispatch = useDispatch('')
  const history = useHistory()
  const selectorList = useSelector(selectors.allShelters)

  useEffect(() => {
    dispatch(allShelters)
  }, [])

  const selectList = selectorList.map(item => {
    return (
      <option value={item.name} label={item.name} id={item.id} key={item.id} />
    )
  })

  return (
    <>
      <ClientInfoStyled className="container">
        <Background></Background>
        <Formik
          initialValues={{
            oneShelter: store.oneShelter ? initialState.oneShelter : 'test',
            selectedShelter: initialState.selectedShelter,
            shelters: [],
            amount: initialState.amount,
            checked: [],
          }}
          validationSchema={shelterYupSchema}
          onSubmit={values => {
            dispatch(shelterActions.shelterInfoAction(values))
            history.push('/clientInfo')
            values = { ...store.getState() }
          }}
        >
          {({
            value,
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <Form>
              <h2>Vyberte si možnosť, ako chcete pomôcť </h2>
              <Field
                component="div"
                name="myRadioGroup"
                onChange={handleChange}
              >
                <ul>
                  <li>
                    <label
                      htmlFor="radioOne"
                      className={
                        values.oneShelter === 'one'
                          ? 'leftLabel active'
                          : 'leftLabel'
                      }
                    >
                      Chcem finančne prispieť konkrétnemu útulku
                      <input
                        className="hideCheck"
                        type="radio"
                        id="radioOne"
                        name="oneShelter"
                        value="one"
                        defaultChecked={values.oneShelter === value}
                        required={touched ? true : false}
                      />
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="radioTwo"
                      className={
                        values.oneShelter === 'all'
                          ? 'rightLabel active'
                          : 'rightLabel'
                      }
                    >
                      Chcem finančne prispieť celej nadácii
                      <input
                        className="hideCheck"
                        type="radio"
                        id="radioTwo"
                        name="oneShelter"
                        value="all"
                        defaultChecked={values.oneShelter === value}
                        required={touched ? true : false}
                      />
                    </label>
                  </li>
                </ul>
                <div className="error">
                  {errors.myRadioGroup ? errors.myRadioGroup : null}
                  <ErrorMessage name="myRadioGroup" />
                </div>
              </Field>
              <div className="titleContainer">
                <h3>O projekte</h3>
                <h3>Nepovinné</h3>
              </div>
              <label className="selectLabel">Utulok</label>
              <select
                name="selectedShelter"
                value={values.selectedShelter}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={values.oneShelter === 'one' ? false : true}
              >
                <option
                  className="selectPlaceholder"
                  value=""
                  label="Vyberte útulok zo zoznamu"
                />
                {selectList}
              </select>
              <div className="error">
                <ErrorMessage name="selectLabel" />
              </div>
              <h3>Suma, ktorou chcem prispieť</h3>
              <div
                className="checkboxContainer"
                role="group"
                label="checkboxGroup"
                name="checkboxGroup"
              >
                <label
                  className={
                    values.checked.toString() === '5'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
                  <Field
                    className="hideCheck"
                    type="checkbox"
                    name="checked"
                    value="5"
                    onChange={value => {
                      console.log(value.target.checked)
                      if (values.checked.length >= 0) {
                        setFieldValue('checked', [value.target.value])
                      }
                    }}
                    // required={!values.checked && touched ? false : true}
                  />
                  5 €
                </label>
                <label
                  className={
                    values.checked.toString() === '10'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
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
                <label
                  className={
                    values.checked.toString() === '20'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
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
                <label
                  className={
                    values.checked.toString() === '30'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
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
                <label
                  className={
                    values.checked.toString() === '50'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
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
                <label
                  className={
                    values.checked.toString() === '100'
                      ? 'checkboxLabel checkboxActive'
                      : 'checkboxLabel'
                  }
                >
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
                  placeholder="€"
                  value={values.amount}
                  onChange={value => {
                    if (values.checked.length >= 0) {
                      setFieldValue('checked', [value.target.value])
                      setFieldValue('amount', value.target.value)
                    } else {
                      setFieldValue('checked', [])
                    }
                  }}
                ></Field>
              </div>
              <div className="error">
                {errors.checked ? errors.checked : null}
                <ErrorMessage name="checkboxGroup" />
              </div>
              <ButtonNext
                type="submit"
                text="Pokračovať"
                disabled={!(isValid && dirty)}
              ></ButtonNext>
            </Form>
          )}
        </Formik>
      </ClientInfoStyled>
      <Footer />
    </>
  )
}

export default connect()(ShelterInfo)
