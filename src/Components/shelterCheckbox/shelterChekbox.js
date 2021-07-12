import ShelterCheckboxStyled from './shelterCheckboxStyled'
import { Field, ErrorMessage } from 'formik'

const shelterCheckbox = props => {
  const { values, setFieldValue } = props
  return (
    <ShelterCheckboxStyled>
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
              if (values.checked.length >= 0) {
                setFieldValue('checked', [value.target.value])
              }
            }}
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
        <ErrorMessage name="checkboxGroup" />
      </div>
    </ShelterCheckboxStyled>
  )
}

export default shelterCheckbox
