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

export const postInfoOperation =
  (firstName, lastName, phone, value, email) => async dispatch => {
    dispatch(shelterActions.postInfoRequest())
    try {
      const response = await axios.post(
        'https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute',
        { firstName, lastName, phone, value, email }
      )
      dispatch(shelterActions.postInfoSucces(response.data))
      console.log(response)
    } catch (error) {
      dispatch(shelterActions.postInfoError(error.message))
    }
  }

export default allShelters
