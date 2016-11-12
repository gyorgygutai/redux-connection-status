# redux-connection-status

A redux module for storing online/offline state in your store.

NOTE: only works in the browser, no React Native implementation provided

## Installation

It can be installed as an [npm package](https://www.npmjs.org/package/redux-connection-status):

```bash
$ npm install --save redux-connection-status
```

## Basic usage

The minimal example:

```js
import { createStore, combineReducers } from 'redux'

import connectionReducer, { syncConnectionWithStore } from 'redux-connection-status'

// add the reducer to your store
const store = createStore(
	combineReducers({
	  // ...
	  connection: connectionReducer()
	  // etc ...
	})
)

// keep connection status and state.connection in sync
// from now on you can use store.getState().connection.isOnline in your app
syncConnectionWithStore(store)
```

#### syncConnectionWithStore(store(, syncerFunction: `function`))

This function has a second optional parameter. The default implementation uses the `navigator.onLine` property and `online`-`offline` events to detect the connection state. You can override this behavior by providing another function. Your function will have access to the store as the first parameter and will be called once on init.

If you detect a change, just call the corresponding action:

```js
import { connectionStatusChanged } from 'redux-connection-status'

const isOnline = false

store.dispatch(connectionStatusChanged(isOnline))
```
