/*
 * @Description: Redux 状态管理
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 23:53:26
 * @LastEditTime: 2019-04-22 23:55:57
 */

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store