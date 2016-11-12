import { connectionStatusChanged } from './reducer'

function connectionDetector (store) {
  store.dispatch(connectionStatusChanged(navigator.onLine))

  window.addEventListener('online', () => store.dispatch(connectionStatusChanged(true)))
  window.addEventListener('offline', () => store.dispatch(connectionStatusChanged(false)))
}

const syncConnectionWithStore = (store, detectorFn = connectionDetector) => detectorFn(store)

export default syncConnectionWithStore
