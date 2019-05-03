/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:24:36
 * @LastEditTime: 2019-05-04 01:43:00
 */
import React, { PureComponent } from 'react';
import {
    WriterWrapper,
    WriterTitle,
    WriterItem,
    WriterList,
    WriterContent,
    WriterFollow
} from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    <div className="left">推荐作者</div>
                    <div className="right">换一批</div>
                </WriterTitle>
                <WriterItem>
                    <WriterList>
                        <img className="avatar" src="//upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                        <WriterContent>
                            <p>须僧</p>
                            <p className="Light">写了202k字 · 8.8k喜欢</p>
                        </WriterContent>
                        <WriterFollow>
                            关注
                        </WriterFollow>
                    </WriterList>
                </WriterItem>
            </WriterWrapper>
        );
    }
};

export default Writer;