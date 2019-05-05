/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-04 21:23:51
 * @LastEditTime: 2019-05-05 22:17:35
 */

import * as constants from './constants';
import axios from 'axios';

const changeLogin = (bool) => ({
    type: constants.CHANGE_LOGIN,
    value: bool
})

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const login = (accout, password) => {
    return (dispatch) => {
        axios.post(
                '/api/login',
                {
                    accout,
                    password
                }
            )
            .then(res => {
                const result = res.data.data;
                if(result) {
                    dispatch(changeLogin(true));
                }else {
                    alert('登陆失败');
                    dispatch(changeLogin(false));
                };
            })
            .catch(err => {
                console.log(err);
            });
    };
};

