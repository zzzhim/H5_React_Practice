/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-02 21:09:29
 * @LastEditTime: 2019-05-04 00:01:20
 */

import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0px auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;

    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 10px;
    margin-bottom: 18px;
    padding-right: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;

    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0px;
    border-bottom: 1px solid #dcdcdc;

    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    margin-bottom: 8px;

    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const ListLabel = styled.div`
    width: 500px;
    height: 20px;
    float: left;
    margin-left: -10px;
`;

export const ListLabelFont = styled.div`
    display: inline-block;
    margin-left: 10px;

    .iconfont {
        display: inline-block;
        color: #b4b4b4;
        vertical-align: middle;
        font-size: 12px;
    }

    .iconfont.diamonds {
        position: relative;
        top: 1px;
        font-size: 14px;
    }

    .highlight {
        color: #ea6f5a !important;
    }

    .iconfont.heart {
        position: relative;
        top: 1px;
        font-size: 14px;
    }

    .text {
        display: inline-block;
        margin-left: 2px;
        font-size: 12px;
        color: #b4b4b4;
        vertical-align: middle;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
    cursor: pointer;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    // border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    // line-height: 300px;
    text-align: center;
`;

export const WriterTitle = styled.div`
    overflow: hidden;
    width: 100%;
    height: 30px;
    line-height: 30px;

    .left, .right {
        display: inline-block;
        font-size: 14px;
        color: #969696;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
        cursor: pointer;
    }
`;

export const WriterItem = styled.ul`
    width: 100%;
    height: 295px;
`;

export const WriterList = styled.li`
    height: 50px;
    margin-bottom: 15px;

    img.avatar {
        width: 46px;
        height: 46px;
        border: 1px solid #ddd;
        border-radius: 50%;
        float: left;
    }
`;

export const WriterContent = styled.div`
    display: inline-block;
    width: 172px;
    line-height: 25px;
    font-size: 14px
    text-align: left;

    .Light  {
        font-size: 12px;
        color: #969696;
    }
`;

export const WriterFollow = styled.div`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
`;