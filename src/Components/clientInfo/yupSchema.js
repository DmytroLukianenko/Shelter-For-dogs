import * as Yup from 'yup'

const yupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .max(20, 'Must be 20 characters or less'),

  lastName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(30, 'Must be 30 characters or less')
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers'),
  email: Yup.string().email('Email should have correct format'),
  // .required('Email is a required field'),
  color: Yup.string().required('You should choose a shelter!'),
  // .required('Email is a required field'),
})

export default yupSchema