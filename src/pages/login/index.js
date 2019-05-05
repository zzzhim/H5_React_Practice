/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-05 21:19:11
 * @LastEditTime: 2019-05-05 22:12:08
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    render() {
        const { login, loginStatus } = this.props;
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={ input => { this.account = input } } />
                        <Input placeholder="密码" type='password' ref={ input => { this.password = input } } />
                        <Button onClick={ () => login(this.account, this.password) }>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else {
            return <Redirect to="/" />;
        };
    }
};

const mapState = (state) => ({
    loginStatus: state.getIn([ 'login', 'login' ])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Login);