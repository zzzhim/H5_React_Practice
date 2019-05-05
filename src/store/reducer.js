/*
 * @Description: 合并子状态文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-05-05 21:40:47
 */

import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer }  from '../pages/home/store';
import { reducer as detailReducer }  from '../pages/detail/store';
import { reducer as loginReducer }  from '../pages/login/store';


// 生成一个不可更改对象
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;