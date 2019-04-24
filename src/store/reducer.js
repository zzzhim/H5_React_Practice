/*
 * @Description: 合并子状态文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-04-24 21:53:44
 */

// import { combineReducers } from 'redux'
import { reducer as headerReducer} from '../components/header/store'
import { combineReducers } from 'redux-immutable'

// 生成一个不可更改对象
const reducer = combineReducers({
    header: headerReducer
})

export default reducer