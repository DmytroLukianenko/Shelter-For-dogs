import { Field, ErrorMessage } from 'formik'
import ShelterRadioStyled from './shelterRadioStyled'

const shelterRadioGroup = props => {
  const { touched, values, value, handleChange } = props
  return (
    <ShelterRadioStyled>
      <Field component="div" name="myRadioGroup" onChange={handleChange}>
        <ul>
          <li>
            <label
              htmlFor="radioOne"
              className={
                values.oneShelter === 'one' ? 'leftLabel active' : 'leftLabel'
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
                values.oneShelter === 'all' ? 'rightLabel active' : 'rightLabel'
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
          <ErrorMessage name="myRadioGroup" />
        </div>
      </Field>
    </ShelterRadioStyled>
  )
}

export default shelterRadioGroup
