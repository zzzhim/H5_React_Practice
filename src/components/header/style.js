/*
 * @Description: 头部CSS
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:22:07
 * @LastEditTime: 2019-04-22 23:21:09
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
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    margin: 0 auto;
    line-height: 56px;
    padding: 0px 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;

        .iconfont {
            font-size: 21px;
            position: relative;
            top: 2px;
        }
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    // overflow: hidden;
    position: relative;
    .slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        width: 240px;
        transition: all .2s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0px 20px;
    box-sizing: border-box;
    background-color: #eeeeee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
        // translate
    }
    &.focused + .iconfont {
        background: #777;
        color: #fff;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.button`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0px 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    background: none;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;

        .iconfont {
            position: relative;
            top: 1px;
            margin-right: 5px;
        }
    }
`