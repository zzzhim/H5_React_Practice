/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-04 21:24:15
 * @LastEditTime: 2019-05-04 21:27:24
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '以后一定得自己开公司',
    content: '<p>最近一直被工资的事情困扰，第一家公司在那里待了一年半，辛辛苦苦加班，提成有2万不到，离职的时候是2018年10月底，现在这个时候10月份的工资还没有发，更别说拿到提成了，问公司会计，人家说还在走流程，什么离职流程要走这么久，公司部门有上百个还是公司有上万人，公司100来号人搞得这么复杂像有多大公司一样</p><p>离职后在南昌找了一家小公司，因为自己炒虚拟货币亏了钱，有债要还，所以单位没有好好找，找了个小单位，现在倒好，在公司工作了快四月还不给转正，工资拖了10天了还没有发，问了老板，老板让找会计，找会计人家不搭理我，仗着自己是老板娘，问了两次人家还是不搭理我，最后第三次我再问了一次，后面附上了举报电话。人家直接回一句你去告啊。现在人当老板好像就是大爷一样，没有一点觉得自己做得不对，好像tm有钱做什么都对。最后打了举报电话，会计后来又屁颠屁颠的来解释，说现在财税改革，所以工资得拖几天，我想说早干嘛去了，现在的人都欺负老实人。</p><p> 出社会了才发现做人得多么的小心翼翼，本来不是我们的问题，因为人家给我们发工资，钱在人家手里，人家就觉得他做什么都对，不过这种人开的公司，公司也不会长远。</p>'
});

// 使用immutable
export default (state = defaultState, action) => {
    const { type } = action;

    switch(type) {

        default:
            return state;
    };
};