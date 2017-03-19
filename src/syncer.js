import { setInitialConnectionStatus, connectionStatusChanged } from './actions'

function connectionSyncer (store) {
  const { dispatch } = store

  dispatch(setInitialConnectionStatus(navigator.onLine))

  window.addEventListener('online', () => dispatch(connectionStatusChanged(true)))
  window.addEventListener('offline', () => dispatch(connectionStatusChanged(false)))
}

const syncConnectionWithStore = (store, syncerFunction = connectionSyncer) => syncerFunction(store)

export default syncConnectionWithStore
