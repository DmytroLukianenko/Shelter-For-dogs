import axios from 'axios'
import shelterActions from '../actions/actions'
import Swal from 'sweetalert2'

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
      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ďakujem! Urobili ste tento svet ešte milším!',
          showConfirmButton: false,
          timer: 5000,
        })
      }
    } catch (error) {
      dispatch(shelterActions.postInfoError(error.message))
    }
  }

export default allShelters
