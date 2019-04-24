/*
 * @Description: 定义 action 的文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-23 23:00:18
 * @LastEditTime: 2019-04-24 23:56:37
 */

import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
});

export const getList = () =>  {
    return (dispatch) => {
        axios.get('/api/headerList')
            .then(res => {
                const { data } = res.data;
                dispatch(changeList(data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};