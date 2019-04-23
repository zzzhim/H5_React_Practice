/*
 * @Description: 合并子状态文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:54:45
 * @LastEditTime: 2019-04-23 22:57:31
 */

import { combineReducers } from 'redux'
import { reducer as headerReducer} from '../components/header/store'

const reducer = combineReducers({
    header: headerReducer
})
export default reducer