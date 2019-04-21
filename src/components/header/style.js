/*
 * @Description: 头部CSS
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:22:07
 * @LastEditTime: 2019-04-22 01:11:42
 */

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    // border-bottom: 1px solid #f0f0f0;
    background: url(${ require('../../statics/logo.png') });
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: green;
`