/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:24:26
 * @LastEditTime: 2019-05-03 03:24:36
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo
} from '../style';

class List extends Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={ item.get('id') }>
                                <img className={ 'pic' } src={ item.get('imgUrl') } alt=''/>
                                <ListInfo>
                                    <h3 className={ 'title' }>{ item.get('title') }</h3>
                                    <p className={ 'desc' }>{ item.get('desc') }</p>
                                </ListInfo>
                            </ListItem>
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