import axios from 'axios'
import shelterActions from '../actions/actions'

const allShelters = () => async dispatch => {
  dispatch(shelterActions.getAllSheltersRequest())
  try {
    const response = await axios.get(
      'https://frontend-assignment-api.goodrequest.com/api/v1/shelters'
    )
    dispatch(shelterActions.getAllSheltersSucces(response))
  } catch (error) {
    dispatch(shelterActions.getAllSheltersError(error.message))
  }
}

export default allShelters
