export const STATUS_CHANGED = 'Connection.STATUS_CHANGED'

export function connectionStatusChanged (isOnline) {
  return { type: STATUS_CHANGED, payload: isOnline }
}

const initialState = {
  isOnline: false
}

export default function connectionReducer (state = initialState, action) {
  if (action.type === STATUS_CHANGED) {
    return {...state, isOnline: action.payload}
  }

  return state
}
