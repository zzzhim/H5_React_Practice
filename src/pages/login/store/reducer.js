/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-04 21:24:15
 * @LastEditTime: 2019-05-05 22:18:16
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false,
});

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;

    switch(type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    };
};