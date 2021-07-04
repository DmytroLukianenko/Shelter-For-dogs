import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { getIn } from 'formik'

const PhoneInputField = () => {
  return (
    <ReactPhoneInput
      country={'sk'}
      onlyCountries={['cz', 'sk']}
      name="phone"
      type="phone"
    />
  )
}

export default PhoneInputField
