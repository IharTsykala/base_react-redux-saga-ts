import { combineReducers } from "redux"
import { formReducer } from "./store/form/form.reducer"

export default combineReducers({
  form: formReducer,
})
