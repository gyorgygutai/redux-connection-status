import { setInitialConnectionStatus, connectionStatusChanged } from './actions'

export const initialState = {
  isOnline: false
}

export default function connectionReducer (state = initialState, action) {
  switch (action.type) {
    case setInitialConnectionStatus.toString():
    case connectionStatusChanged.toString():
      return {...state, isOnline: action.payload}

    default:
      return state
  }
}
