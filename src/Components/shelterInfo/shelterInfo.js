import React, { useEffect } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import ShelterIngoStyled from './shelterInfoStyled'
import { connect, useDispatch } from 'react-redux'
import allShelters from '../../Redux/operations/operations'
import shelterActions from '../../Redux/actions/actions'
import { useHistory } from 'react-router-dom'
import { ButtonNext } from '../button/Button'
import Background from '../backGround/backGround'
import Footer from '../footer/Footer'
import shelterYupSchema from './yupSchema'
import store from '../../Redux/store'
import ShelterRadioGroup from '../shelterRadio/shelterRadio'
import SheltroSelect from '../shelterSelect/shelterSelect'
import ShelterCheckbox from '../shelterCheckbox/shelterChekbox'

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

  useEffect(() => {
    dispatch(allShelters())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ShelterIngoStyled className="container">
        <Background></Background>
        <Formik
          initialValues={{ ...initialState }}
          validationSchema={shelterYupSchema}
          onSubmit={values => {
            dispatch(shelterActions.shelterInfoAction(values))
            history.push('/clientInfo')
            values = { ...store.getState() }
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            touched,
            setFieldValue,
            isValid,
            dirty,
            disabled,
          }) => (
            <Form>
              <h2>Vyberte si možnosť, ako chcete pomôcť </h2>
              <Field
                as={ShelterRadioGroup}
                values={values}
                handleChange={handleChange}
                touched={touched}
              >
                <ErrorMessage name="myRadioGroup" />
              </Field>
              <div className="titleContainer">
                <h3>O projekte</h3>
                <h3 className="nepovinne">Nepovinné</h3>
              </div>
              <Field
                as={SheltroSelect}
                values={values}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
              ></Field>
              <div className="error">
                <ErrorMessage name="selectLabel" />
              </div>
              <Field
                as={ShelterCheckbox}
                values={values}
                setFieldValue={setFieldValue}
              ></Field>
              <ButtonNext
                type="submit"
                text="Pokračovať"
                disabled={!(isValid && dirty)}
              ></ButtonNext>
            </Form>
          )}
        </Formik>
      </ShelterIngoStyled>
      <Footer />
    </>
  )
}

export default connect()(ShelterInfo)
