/*
 * @Description: 合并子状态文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-05-04 21:29:05
 */

import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer }  from '../pages/home/store';
import { reducer as detailReducer }  from '../pages/detail/store';

// 生成一个不可更改对象
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
});

export default reducer;