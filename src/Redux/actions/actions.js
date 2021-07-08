import { createAction } from '@reduxjs/toolkit'

// ==============================CLIENT ACTIONS==========================
export const clientInfoAction = createAction('clientInfo/submit')

// =============================         SHELTER ACTIONS =====================

const shelterInfoAction = createAction('shelterInfo/submit')

const getAllSheltersRequest = createAction('shelter/getRequest')
const getAllSheltersSucces = createAction('shelter/getSucces')
const getAllSheltersError = createAction('shelter/getError')

const postInfoRequest = createAction('shelter/postRequest')
const postInfoSucces = createAction('shelter/postSucces')
const postInfoError = createAction('shelter/postError')

const shelterActions = {
  shelterInfoAction,
  getAllSheltersRequest,
  getAllSheltersSucces,
  getAllSheltersError,
  postInfoRequest,
  postInfoSucces,
  postInfoError,
}

export default shelterActions
