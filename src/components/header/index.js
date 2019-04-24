/*
 * @Description: 头部组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:18:18
 * @LastEditTime: 2019-04-25 00:03:00
 */

import React, { Component } from 'react';
// import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store/index.js';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style';

// 使用无状态组件
// const Header = (props) => {
//     const {
//         focused,
//         handleInputFocus,
//         handleInputBlur
//     } = props

//     return (
//         <HeaderWrapper>
//             <Logo href="/" />
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">下载App</NavItem>
//                 <NavItem className="right">登陆</NavItem>
//                 <NavItem className="right">
//                     <i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={ focused }
//                         timeout={ 200 }
//                         classNames="slide"
//                         >
//                         <NavSearch
//                             className={ focused ? 'focused' : '' }
//                             onFocus={ handleInputFocus }
//                             onBlur={ handleInputBlur }
//                         />
//                     </CSSTransition>
//                     <i className="iconfont">&#xe637;</i>
//                     { getListArea(focused) }
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writting">
//                     <i className="iconfont">&#xe600;</i>
//                     写文章
//                 </Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }

class Header extends Component {
    constructor(props) {
        super(props);

        this.getListArea = this.getListArea.bind(this);
    }

    getListArea(list) {
        if(this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            this.props.list.map(item => {
                                return (
                                    <SearchInfoItem key={ item }>{ item }</SearchInfoItem>
                                )
                            })
                        }
                    </div>
                </SearchInfo>
            );
        }else {
            return null;
        };
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ this.props.focused }
                            timeout={ 200 }
                            classNames="slide"
                            >
                            <NavSearch
                                className={ this.props.focused ? 'focused' : '' }
                                onFocus={ this.props.handleInputFocus }
                                onBlur={ this.props.handleInputBlur }
                            />
                        </CSSTransition>
                        <i className="iconfont">&#xe637;</i>
                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe600;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
};

const mapStateToProps = (state) => {
    // const { focused } = state.header
    // return {
    //     focused: state.header.get('focused')
    // }

    return {
        // focused: state.get('header').get('focused'),
        focused: state.getIn([ 'header', 'focused' ]),
        list: state.getIn([ 'header', 'list' ]),
    };
};

const mapDispathToProps = (dispatch, action) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);