import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { clientInfoAction } from '../actions/actions'
import shelterActions from '../actions/actions'

const clientInfoinitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const clientReducer = createReducer(
  { ...clientInfoinitialState },
  {
    [clientInfoAction]: (state, { payload }) => ({ ...payload }),
  }
)
const shelterInfoInitialState = {
  oneShelter: '',
  selectedShelter: '',
  shelters: [],
  amount: '',
}

const shelterInfoReducer = createReducer(
  { ...shelterInfoInitialState },
  {
    [shelterActions.shelterInfoAction]: (_, { payload }) => ({
      // ...payload,
      amount: payload.checked.toString(),
      oneShelter: payload.oneShelter,
      selectedShelter: payload.selectedShelter,
      shelters: payload.shelters,
    }),

    [shelterActions.getAllSheltersSucces]: (state, { payload }) => ({
      ...state,
      ...payload.data,
    }),
  }
)
export default combineReducers({
  shelterInfoReducer,
  clientReducer,
})
