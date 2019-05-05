/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 20:48:04
 * @LastEditTime: 2019-05-05 22:41:38
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// 让这个页面有能力获取 router 的所有参数和内容
import { withRouter } from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.props.params)
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
};

const mapState = (state) => ({
    title: state.getIn([ 'detail', 'title' ]),
    content: state.getIn([ 'detail', 'content' ]),
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));