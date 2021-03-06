import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from './routes'

import {Provider} from 'react-redux'
import ReduxPromise from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'

import rootReducer from './reducers'
import {fetchInterests} from './actions'
import {fetchQuiz} from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

store.dispatch(fetchQuiz())
store.dispatch(fetchInterests())

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('main')

	)

