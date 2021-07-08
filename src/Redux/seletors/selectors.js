// =================     shelter selectors ====================
const allShelters = state => state.shelterInfoReducer.shelters
const amount = state => state.shelterInfoReducer.amount
const selectedShelter = state => state.shelterInfoReducer.selectedShelter
const oneShelter = state => state.shelterInfoReducer.oneShelter

// ==============       client selectors ====================
const firstName = state => state.shelterInfoReducer.firstName
const lastName = state => state.shelterInfoReducer.lastName
const email = state => state.shelterInfoReducer.email
const phone = state => state.shelterInfoReducer.phone
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
