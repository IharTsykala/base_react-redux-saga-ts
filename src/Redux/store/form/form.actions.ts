import { Action } from "../../interfacesAction/action.interface"
import { formInterface } from "../../InterfacesEntity/form.interface"

export const ActionTypes = {
  GET_FORM: "[FORM] Set form",
  SET_FORM: "[PHOTO] Set form",

  GET_FAILURE: "[getFailureAction] get failure action",
}

export const getForm = (form: formInterface[]): Action<formInterface[]> => ({
  type: ActionTypes.GET_FORM,
  payload: form,
})

export const setForm = (form: formInterface[]): Action<formInterface[]> => ({
  type: ActionTypes.SET_FORM,
  payload: form,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
