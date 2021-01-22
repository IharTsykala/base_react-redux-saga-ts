import { formInterface } from "../../InterfacesEntity/form.interface"
import { ActionTypes } from "./form.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  form: formInterface | null;
}

const initialState: State = {
  form: null,
}

export const formReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
    case ActionTypes.SET_FORM:
      return {
        ...state,
        form: action.payload,
      }
    default:
      return state
  }
}
