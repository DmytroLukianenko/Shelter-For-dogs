import selectors from '../../Redux/seletors/selectors'
import ShelterSelectStyled from './shelterSelectStyled'
import { useSelector } from 'react-redux'

const SheltroSelect = props => {
  const { values, onChange, disabled, onBlur, ...restProps } = props

  const selectorList = useSelector(selectors.allShelters)

  const selectList = selectorList.map(item => {
    return (
      <option value={item.name} label={item.name} id={item.id} key={item.id} />
    )
  })
  return (
    <ShelterSelectStyled className="shelterSelect">
      <label className="selectLabel">Utulok</label>
      <select
        name="selectedShelter"
        value={values.selectedShelter}
        onChange={onChange}
        onBlur={onBlur}
        disabled={values.oneShelter === 'one' ? false : true}
      >
        <option
          className="selectPlaceholder"
          value=""
          label="Vyberte útulok zo zoznamu"
        />
        {selectList}
      </select>
    </ShelterSelectStyled>
  )
}
export default SheltroSelect
