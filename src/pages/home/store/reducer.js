/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-03 02:26:59
 * @LastEditTime: 2019-05-04 01:19:15
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(fromJS(action.list)),
        'articlePage': action.nextPage
    });
};

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;

    switch(type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    };
};