import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Debug } from './Debug'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Selection = () => (
 
    <Formik
     
      onSubmit={async values => {
        await sleep(1000)
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {/* {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => ( */}
        <Form>

          <label htmlFor="location">Vyberte útulok zo zoznamu</label>
          <Field
            component="select"
            id="location"
            name="location"
            multiple={false}
          >
            <option value="NY">New York</option>
            <option value="SF">San Francisco</option>
            <option value="CH">Chicago</option>
            <option value="OTHER">Other</option>
          </Field>
          <label>
            <Field type="checkbox" name="terms" />I accept the terms and
            conditions.
          </label>
          {/* Here's how you can use a checkbox to show / hide another field */}
          {!!values.terms ? (
            <div>
              <label>
                <Field type="checkbox" name="newsletter" />
                Send me the newsletter{' '}
                <em style={{ color: 'rebeccapurple' }}>
                  (This is only shown if terms = true)
                </em>
              </label>
            </div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <Debug />
        </Form>
      )}
    </Formik>
  </div>
)

export default Selection
