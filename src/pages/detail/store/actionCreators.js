/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-04 21:23:51
 * @LastEditTime: 2019-05-04 22:09:19
 */

import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail')
            .then(res => {
                const result = res.data.data;
                dispatch(changeDetail(result.title, result.content));
            })
            .catch(err => {
                console.log(err);
            });
    };
};