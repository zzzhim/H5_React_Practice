/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-05 22:21:35
 * @LastEditTime: 2019-05-05 22:25:01
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    render() {
        const { loginStatus } = this.props;
        if(loginStatus) {
            return (
                <div>写文章</div>
            );
        }else {
            return <Redirect to="/login" />;
        };
    }
};

const mapState = (state) => ({
    loginStatus: state.getIn([ 'login', 'login' ])
})

export default connect(mapState, null)(Write);