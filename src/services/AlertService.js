import { showAlert } from "../store/actions"
import store from "../store/store"

export const showTextAlert = (data) => {
  store.dispatch(showAlert({type: "Text", data }))
}

export const showWarningAlert = (data) => {
  store.dispatch(showAlert({type: "Warning", data }))
}

export const showInputAlert = (data) => {
  store.dispatch(showAlert({type: "Input", data }))
}