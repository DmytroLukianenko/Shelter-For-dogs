import * as Yup from 'yup'

const shelterYupSchema = Yup.object().shape({
  checked: Yup.array().min(1, 'Vyberte sumu, ktorú chcete venovať'),
  myRadioGroup: Yup.string().min(1, 'Vyberte sumu, ktorú chcete venovať'),
})

export default shelterYupSchema
