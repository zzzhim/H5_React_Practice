/*
 * @Description: 头部组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 00:18:18
 * @LastEditTime: 2019-04-23 00:17:06
 */

// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

// 使用无状态组件
const Header = (props) => {
    const {
        focused,
        handleInputFocus,
        handleInputBlur
    } = props

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
                        in={ focused }
                        timeout={ 200 }
                        classNames="slide"
                        >
                        <NavSearch
                            className={ focused ? 'focused' : '' }
                            onFocus={ handleInputFocus }
                            onBlur={ handleInputBlur }
                        />
                    </CSSTransition>
                    <i className="iconfont">&#xe637;</i>
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
    )
}

// class Header extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             focused: false
//         }

//         this.handleInputFocus = this.handleInputFocus.bind(this)
//         this.handleInputBlur = this.handleInputBlur.bind(this)
//     }

//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo href="/" />
//                 <Nav>
//                     <NavItem className="left active">首页</NavItem>
//                     <NavItem className="left">下载App</NavItem>
//                     <NavItem className="right">登陆</NavItem>
//                     <NavItem className="right">
//                         <i className="iconfont">&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             in={ this.state.focused }
//                             timeout={ 200 }
//                             classNames="slide"
//                             >
//                             <NavSearch
//                                 className={ this.state.focused ? 'focused' : '' }
//                                 onFocus={ this.handleInputFocus }
//                                 onBlur={ this.handleInputBlur }
//                             />
//                         </CSSTransition>
//                         <i className="iconfont">&#xe637;</i>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className="writting">
//                         <i className="iconfont">&#xe600;</i>
//                         写文章
//                     </Button>
//                     <Button className="reg">注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }

//     handleInputFocus() {
//         this.setState({
//             focused: true
//         })

//     }

//     handleInputBlur() {
//         this.setState({
//             focused: false
//         })
//     }
// }

const mapStateToProps = ({
    focused
}) => {
    return {
        focused
    }
}

const mapDispathToProps = (dispatch, action) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }

            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }

            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header)