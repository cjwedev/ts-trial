import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css'
import App from './App'
import reducer from './store/reducer'
import * as serviceWorker from './serviceWorker'

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
