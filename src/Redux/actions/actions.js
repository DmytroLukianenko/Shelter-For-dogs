import { createAction } from '@reduxjs/toolkit'

// ==============================CLIENT ACTIONS==========================
export const clientInfoAction = createAction('clientInfo/submit')

// =============================         SHELTER ACTIONS =====================

const shelterInfoAction = createAction('shelterInfo/submit')

const getAllSheltersRequest = createAction('shelter/request')
const getAllSheltersSucces = createAction('shelter/succes')
const getAllSheltersError = createAction('shelter/error')

const shelterActions = {
  shelterInfoAction,
  getAllSheltersRequest,
  getAllSheltersSucces,
  getAllSheltersError,
}

export default shelterActions
