import React from 'react'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
