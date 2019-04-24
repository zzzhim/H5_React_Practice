/*
 * @Description: 入口文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 23:16:09
 * @LastEditTime: 2019-04-24 23:36:04
 */

import React, { Component } from 'react';
import Header from './components/header/index.js';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont.js';
import './utils';

class App extends Component {
    render() {
        return (
            // Provider 内部的组件都可以访问到 store
            <Provider store={ store }>
                <GlobalIconFont />
                <GlobalStyled />
                <Header />
            </Provider>
        );
    }
};

export default App;
