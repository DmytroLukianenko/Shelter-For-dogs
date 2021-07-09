import * as Yup from 'yup'

const shelterYupSchema = Yup.object().shape({
  checked: Yup.array().min(1, 'At least one must be selected'),
})

export default shelterYupSchema
