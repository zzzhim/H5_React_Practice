/*
 * @Description: Mockjs 拦截 AJAX 请求
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-24 23:29:25
 * @LastEditTime: 2019-05-04 00:53:58
 */

import Mock from 'mockjs';

Mock.setup({
    timeout: '200-800'
});

Mock.mock('/api/headerList', {
    "success": true,
    "data": ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
});

Mock.mock('/api/home', {
    success: true,
    data: {
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
                imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                score: 7.8,
                author: '迷影生活',
                comment: 6,
                like: 9
            },
            {
                id: 2,
                title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
                desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
                imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                score: 9,
                author: '迷影生活',
                comment: 20,
                like: 6
    
            },
            {
                id: 3,
                title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
                desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
                imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                score: 9.5,
                author: '迷影生活',
                comment: 260,
                like: 68
            },
            {
                id: 4,
                title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
                desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
                imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
                score: 6.8,
                author: '迷影生活',
                comment: 50,
                like: 62
            }
        ],
        recommendList: [
            {
                id: 1,
                imgUrl: require('../statics/hy.png')
            },
            {
                id: 2,
                imgUrl: require('../statics/lz.png')
            },
            {
                id: 3,
                imgUrl: require('../statics/bq.png')
            },
            {
                id: 4,
                imgUrl: require('../statics/dxt.png')
            }
        ]
    }
});

Mock.mock(/^(\/api\/homeList\?page=)(\d)+$/, 'get', {
    success: true,
    data: [
        {
            id: 5,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            score: 7.8,
            author: '迷影生活',
            comment: 6,
            like: 9
        },
        {
            id: 6,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            score: 9,
            author: '迷影生活',
            comment: 20,
            like: 6

        },
        {
            id: 7,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            score: 9.5,
            author: '迷影生活',
            comment: 260,
            like: 68
        },
        {
            id: 8,
            title: '无人赞助倾尽身家，吴京苦尽甘来，但你不知道成名前的他有多苦',
            desc: '现在娱乐圈是鲜肉当道，实力派艺人几乎都处于被忽略的地位。 但是要挑起作品的大梁，唯有老艺人才能做顶梁柱。鲜肉太稚嫩，无力承担。在今年的贺岁档上，...',
            imgUrl: '//upload-images.jianshu.io/upload_images/1545827-18642cbf05052034?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            score: 6.8,
            author: '迷影生活',
            comment: 50,
            like: 62
        }
    ]
});

export default Mock;