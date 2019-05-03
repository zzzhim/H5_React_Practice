/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-03 22:58:03
 * @LastEditTime: 2019-05-04 01:09:59
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

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list,
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList?page=' + page)
            .then(res => {
                const result = res.data.data;
                const action = addHomeList(result, page + 1);
                dispatch(action);
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})