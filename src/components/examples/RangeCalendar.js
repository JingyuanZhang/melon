/**
 * @file Example / RangeCalendar
 * @author cxtom<cxtom2010@gmail.com>
 */


import React from 'react';
import RangeCalendar from 'melon/RangeCalendar';
import UnitCalendar from 'melon/UnitCalendar';
import Title from 'melon/Title';

require('../code/RangeCalendar.txt');

/* eslint-disable fecs-prefer-class */

function View(props) {

    return (
        <div>
            <div className="melon-row">
                <div className="melon-column melon-column-8">
                    <Title level={5}>日期区间</Title>
                    <RangeCalendar
                        defaultValue={['2014-10-20', '2015-10-20']}
                        begin="2014-10-21"
                        end="2016-10-19"
                        size="xxs" />
                </div>
            </div>
            <div className="melon-row">
                <div className="melon-column melon-column-6">
                    <Title level={5}>周区间</Title>
                    <UnitCalendar
                        size="xxs"
                        defaultValue={[]}
                        begin={new Date(2015, 10, 2)}
                        end={new Date(2016, 0, 31)}
                        unit="week"/>
                </div>
                <div className="melon-column melon-column-6">
                    <Title level={5}>月区间</Title>
                    <UnitCalendar
                        size="xxs"
                        defaultValue={[]}
                        begin={new Date(2014, 10, 1)}
                        end={new Date(2015, 11, 1)}
                        unit="month" />
                </div>
                <div className="melon-column melon-column-6">
                    <Title level={5}>年区间</Title>
                    <UnitCalendar
                        size="xxs"
                        defaultValue={[]}
                        begin={new Date(2012, 0, 1)}
                        end={new Date(2020, 4, 1)}
                        unit="year" />
                </div>
            </div>
        </div>
    );
}

module.exports = View;