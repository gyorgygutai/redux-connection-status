import { connectionStatusChanged } from './reducer'

function connectionSyncer (store) {
  store.dispatch(connectionStatusChanged(navigator.onLine))

  window.addEventListener('online', () => store.dispatch(connectionStatusChanged(true)))
  window.addEventListener('offline', () => store.dispatch(connectionStatusChanged(false)))
}

const syncConnectionWithStore = (store, syncerFunction = connectionSyncer) => syncerFunction(store)

export default syncConnectionWithStore
