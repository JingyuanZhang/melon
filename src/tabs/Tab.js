/**
 * @file esui-react Tabs Tab
 * @author cxtom<cxtom2010@gmail.com>
 */

const React = require('react');

const cx = require('../common/util/cxBuilder').create('TabsItem');

function Tab(props) {

    const {
        selected,
        disabled,
        label,
        ...others
    } = props;

    return (
        <li {...others} className={cx(props).addStates({selected, disabled}).build()}>
            {label}
        </li>
    );
}

module.exports = Tab;
