/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-03 22:58:03
 * @LastEditTime: 2019-05-03 23:05:45
 */

import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home')
            .then(res => {
                const result = res.data.data;
                const action = changeHomeData(result);
                dispatch(action);
            })
            .catch(err => {
                console.log(err);
            });
    }
};