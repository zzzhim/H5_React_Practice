/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-04-23 23:13:57
 */

import { constants } from './index.js'

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    const { type } = action

    switch(type) {
        case constants.SEARCH_FOCUS:
            newState.focused = true
            break
        case constants.SEARCH_BLUR:
            newState.focused = false
            break
        default:
            break
    }

    return newState
}