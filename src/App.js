/*
 * @Description: 入口文件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-21 23:16:09
 * @LastEditTime: 2019-05-02 21:08:32
 */

import React, { Component } from 'react';
import Header from './components/header/index.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

import { GlobalStyled } from './style';
import { GlobalIconFont } from './statics/iconfont/iconfont.js';
import './utils';

class App extends Component {
    render() {
        return (
            // Provider 内部的组件都可以访问到 store
            <Provider store={ store }>
                <div>
                    <GlobalIconFont />
                    <GlobalStyled />
                    <Header />
                    {/* 路由 */}
                    <BrowserRouter>
                        <div>
                            <Route
                                path="/"
                                exact
                                component={Home}>
                            </Route>
                            <Route
                                path="/detail"
                                exact
                                component={Detail}>
                            </Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
};

export default App;
