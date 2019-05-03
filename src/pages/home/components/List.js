/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:24:26
 * @LastEditTime: 2019-05-04 00:18:55
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    ListLabel,
    ListLabelFont,
    LoadMore
} from '../style';
import { actionCreators } from '../store';

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={ index }>
                                <ListItem>
                                    <img className={ 'pic' } src={ item.get('imgUrl') } alt=''/>
                                    <ListInfo>
                                        <h3 className={ 'title' }>{ item.get('title') }</h3>
                                        <p className={ 'desc' }>{ item.get('desc') }</p>
                                    </ListInfo>
                                    <ListLabel>
                                        <ListLabelFont>
                                            <i className={ 'iconfont diamonds highlight' }>&#xe601;</i>
                                            <span className={ 'text highlight' }>{ item.get('score') }</span>
                                        </ListLabelFont>
                                        <ListLabelFont>
                                            <span className={ 'text' }>{ item.get('author') }</span>
                                        </ListLabelFont>
                                        <ListLabelFont>
                                            <i className={ 'iconfont' }>&#xe620;</i>
                                            <span className={ 'text' }>{ item.get('comment') }</span>
                                        </ListLabelFont>
                                        <ListLabelFont>
                                            <i className={ 'iconfont heart' }>&#xe66e;</i>
                                            <span className={ 'text' }>{ item.get('like') }</span>
                                        </ListLabelFont>
                                    </ListLabel>
                                </ListItem>
                            </div>
                        );
                    })
                }
                <LoadMore onClick={ () => getMoreList(page) }>更多文字</LoadMore>
            </div>
        );
    }
};

const mapState = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapState, mapDispatch)(List);