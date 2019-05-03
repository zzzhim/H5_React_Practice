/*
 * @Description: 头部组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:18:18
 * @LastEditTime: 2019-05-04 01:50:52
 */

import React, { Component } from 'react';
// import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import _ from 'lodash';
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
import { Link } from 'react-router-dom';

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

    getListArea() {
        const {
            focused,
            mouseIn,
            list,
            page,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage
        } = this.props;

        const jsList = list.toJS();
        const pageList = _.slice(jsList, (page - 1) * 10, page * 10);

        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                    >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={ () => handleChangePage(page, totalPage, this.spinIcon ) }
                            >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            pageList.length ? pageList.map(item => {
                                return (
                                    <SearchInfoItem key={ item }>{ item }</SearchInfoItem>
                                )
                            }) : null
                        }
                    </div>
                </SearchInfo>
            );
        }else {
            return null;
        };
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ focused }
                            timeout={ 200 }
                            classNames="slide"
                            >
                            <NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={ () => handleInputFocus(list) }
                                onBlur={ handleInputBlur }
                            />
                        </CSSTransition>
                        <i className="iconfont zoom">&#xe637;</i>
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
    return {
        focused: state.getIn([ 'header', 'focused' ]),
        mouseIn: state.getIn([ 'header', 'mouseIn' ]),
        list: state.getIn([ 'header', 'list' ]),
        page: state.getIn([ 'header', 'page' ]),
        totalPage: state.getIn([ 'header', 'totalPage' ])
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }

            spin.style.transform = `rotate(${originAngle + 360}deg)`;

            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            };
        }
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);