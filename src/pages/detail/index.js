/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 20:48:04
 * @LastEditTime: 2019-05-04 22:03:01
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail();
    }
};

const mapState = (state) => ({
    title: state.getIn([ 'detail', 'title' ]),
    content: state.getIn([ 'detail', 'content' ]),
});

const mapDispatch = (dispatch) => ({
    getDetail() {
        dispatch(actionCreators.getDetail());
    }
});

export default connect(mapState, mapDispatch)(Detail);