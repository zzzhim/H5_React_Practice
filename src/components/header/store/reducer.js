/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-04-24 23:47:37
 */

import { constants } from './index.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;
    let newState = state;

    switch(type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法,会结合之前immputable对象的值和设置的值，返回一个全新的对象
            newState = state.set('focused', true);
            break;
        case constants.SEARCH_BLUR:
            newState = state.set('focused', false);
            break;
        case constants.CHANGE_LIST:
            newState = state.set('list', action.data);
            break;
        default:
            break;
    };

    return newState;
};

// 手动管理
// export default (state = defaultState, action) => {
//     // 深拷贝
//     const newState = JSON.parse(JSON.stringify(state))
//     const { type } = action

//     switch(type) {
//         case constants.SEARCH_FOCUS:
//             newState.focused = true
//             break
//         case constants.SEARCH_BLUR:
//             newState.focused = false
//             break
//         default:
//             break
//     }

//     return newState
// }