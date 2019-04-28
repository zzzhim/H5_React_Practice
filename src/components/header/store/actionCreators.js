/*
 * @Description: 定义 action 的文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-23 23:00:18
 * @LastEditTime: 2019-04-29 01:23:49
 */

import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
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

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page
});