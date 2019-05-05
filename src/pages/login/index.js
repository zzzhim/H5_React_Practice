/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-05 21:19:11
 * @LastEditTime: 2019-05-05 21:37:13
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号"/>
                    <Input placeholder="密码"/>
                    <Button>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }

    componentDidMount() {
    }
};

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Login);