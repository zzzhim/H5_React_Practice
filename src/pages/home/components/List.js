/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:24:26
 * @LastEditTime: 2019-05-03 15:55:27
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    ListLabel,
    ListLabelFont
} from '../style';

class List extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <div key={ item.get('id') }>
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
            </div>
        );
    }
};

const mapState = (state) => ({
    list: state.get('home').get('articleList')
});

export default connect(mapState, null)(List);