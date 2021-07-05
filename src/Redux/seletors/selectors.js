// =================     shelter selectors ====================
const allShelters = state => state.shelterInfoReducer.shelters
const amount = state => state.shelterInfoReducer.amount
const selectedShelter = state => state.shelterInfoReducer.selectedShelter
const oneShelter = state => state.shelterInfoReducer.oneShelter

// ==============       client selectors ====================
const firstName = state => state.clientReducer.firstName
const lastName = state => state.clientReducer.lastName
const email = state => state.clientReducer.email
const phone = state => state.clientReducer.phone
const selectors = {
  allShelters,
  firstName,
  lastName,
  email,
  phone,
  amount,
  selectedShelter,
  oneShelter,
}
export default selectors
