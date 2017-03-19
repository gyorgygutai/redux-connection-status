import createAction from 'redux-actions/lib/createAction'

export const connectionStatusChanged = createAction('Connection.STATUS_CHANGED')

const initialState = {
  isOnline: false
}

export default function connectionReducer (state = initialState, action) {
  if (action.type === connectionStatusChanged.toString()) {
    return {...state, isOnline: action.payload}
  }

  return state
}
