import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { clientInfoAction } from '../actions/actions'
import shelterActions from '../actions/actions'
import { number } from 'yup'

const clientInfoinitialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

// const clientReducer = createReducer({ ...clientInfoinitialState })
const shelterInfoInitialState = {
  oneShelter: '',
  selectedShelter: '',
  shelterId: '',
  shelters: [],
  amount: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

const shelterInfoReducer = createReducer(
  { ...shelterInfoInitialState },

  {
    [clientInfoAction]: (state, { payload }) => ({ ...state, ...payload }),

    [shelterActions.shelterInfoAction]: (state, { payload }) => ({
      amount: payload.checked.toString(),
      oneShelter: payload.oneShelter,
      selectedShelter: payload.selectedShelter,
      shelters: [...state.shelters],
    }),

    [shelterActions.getAllSheltersSucces]: (state, { payload }) => ({
      ...state,
      shelters: payload.data.shelters,
    }),

    [shelterActions.postInfoSucces]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  }
)
export default combineReducers({
  shelterInfoReducer,
})
