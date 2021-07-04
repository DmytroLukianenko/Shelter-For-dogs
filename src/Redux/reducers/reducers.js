import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { clientInfoAction, shelterInfoAction } from '../actions/actions'

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
  shelterName: '',
  amount: '',
}

const shelterInfoReducer = createReducer(
  { ...shelterInfoInitialState },
  {
    [shelterInfoAction]: (state, { payload }) => ({ ...payload }),
  }
)
export default combineReducers({
  shelterInfoReducer,
  clientReducer,
})
