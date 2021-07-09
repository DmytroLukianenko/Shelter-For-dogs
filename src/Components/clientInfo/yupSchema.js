import * as Yup from 'yup'

const yupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Musí mať minimálne 2 znaky')
    .matches(/^([^0-9]*)$/, 'Meno by nemalo obsahovať čísla')
    .max(20, 'Musí mať maximálne 20 znakov')
    .required('Meno je povinné pole'),

  lastName: Yup.string()
    .min(2, 'Musí mať minimálne 2 znaky')
    .max(30, 'Musí mať maximálne 30 znakov')
    .matches(/^([^0-9]*)$/, 'Priezvisko by nemalo obsahovať čísla')
    .required('Priezvisko je povinné pole'),
  email: Yup.string()
    .email('E-mail by mal mať správny formát')
    .required('E-mail je povinné pole'),
})

export default yupSchema
