/*
 * @Description: Redux 状态管理
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:53:26
 * @LastEditTime: 2019-04-24 23:11:24
 */

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store