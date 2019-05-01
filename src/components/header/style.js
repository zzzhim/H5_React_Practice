/*
 * @Description: 头部CSS
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:22:07
 * @LastEditTime: 2019-05-01 19:41:14
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
    .zoom {
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

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 56px;
    width: 240px;
    // height: 100px;
    height: auto;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .spin {
        font-size: 12px;
        margin-top: 1px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
        display: block;
        float: left;
    }
`

export const SearchInfoItem = styled.a`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #dddddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
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