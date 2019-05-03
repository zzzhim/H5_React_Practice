/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 20:46:08
 * @LastEditTime: 2019-05-04 01:53:52
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener(
            'scroll',
            this.props.changeScrollTopShow,
            false
        );
    }

    render() {
        const { showScroll } = this.props;

        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img"
                        src="//upload.jianshu.io/admin_banners/web_images/4652/f32e7f414d86d5a1709f8e6f00ec3272fd9f604b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=''
                    />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    showScroll
                    ?
                    <BackTop onClick={ this.handleScrollTop }>
                        回到顶部
                    </BackTop>
                    :
                    null
                }
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.cahngeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener(
            'scroll',
            this.props.changeScrollTopShow
        );
    }
};

const mapState = (state) => ({
    showScroll: state.getIn([ 'home', 'showScroll' ])
});

const mapDispatch = (dispatch) => ({
    cahngeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        const top = document.documentElement.scrollTop;
        if(top > 50) {
            const action = actionCreators.toggleTopShow(true);
            dispatch(action);
        }else {
            const action = actionCreators.toggleTopShow(false);
            dispatch(action);
        };
    }
});

export default connect(mapState, mapDispatch)(Home);