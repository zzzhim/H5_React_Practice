/*
 * @Description: 头部组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:18:18
 * @LastEditTime: 2019-04-22 00:58:03
 */

import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav
} from './style'


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav></Nav>
            </HeaderWrapper>
        )
    }
}

export default Header