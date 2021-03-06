/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:24:36
 * @LastEditTime: 2019-05-04 01:42:52
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;

        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem
                                key={ item.get('id') }
                                imgUrl={ item.get('imgUrl') }
                            >
                            </RecommendItem>
                        );
                    })
                }
            </RecommendWrapper>
        );
    }
};

const mapState = (state) => ({
    list: state.get('home').get('recommendList')
});

export default connect(mapState, null)(Recommend);