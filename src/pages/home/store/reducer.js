/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-03 02:26:59
 * @LastEditTime: 2019-05-03 14:57:57
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
    ],
    articleList: [
        {
            id: 1,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id: 2,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
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