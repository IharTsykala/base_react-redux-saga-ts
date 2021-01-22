import { put, takeEvery } from "redux-saga/effects"

import { ActionTypes, setForm, getFailureAction } from "./form.actions"

const formObj = {}

function* setFormSaga(actions: any) {
  try {
    yield put(setForm([formObj]))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* formSaga() {
  yield takeEvery(ActionTypes.GET_FORM, setFormSaga)
}
