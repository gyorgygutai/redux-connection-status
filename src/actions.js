import createAction from 'redux-actions/lib/createAction'

export const setInitialConnectionStatus = createAction('Connection.SET_INITIAL_STATUS')
export const connectionStatusChanged = createAction('Connection.STATUS_CHANGED')

export default {
  setInitialConnectionStatus,
  connectionStatusChanged
}
