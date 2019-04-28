/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-04-29 01:40:42
 */

import { constants } from './index.js';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;

    switch(type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法,会结合之前immputable对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true);

        case constants.SEARCH_BLUR:
            return state.set('focused', false);

        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });

        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);

        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);

        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
            
        default:
            return state;
    };
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