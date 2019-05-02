/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-03 02:26:59
 * @LastEditTime: 2019-05-03 02:30:10
 */
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 2,
            title: '手绘',
            imgUrl: '//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ]
});

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;

    switch(type) {
        default:
            return state;
    };
};