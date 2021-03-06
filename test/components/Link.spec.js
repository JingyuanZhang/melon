/**
 * @file Link单测
 * @author cxtom(cxtom2008@gmail.com)
 */

import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

import Link from '../../src/Link';

describe('Link', function () {

    let renderer;

    beforeEach(function () {
        renderer = createRenderer();
    });

    afterEach(function () {
        renderer = null;
    });

    it('work', function () {
        renderer.render(<Link>link</Link>);
        let actualElement = renderer.getRenderOutput();
        let expectedElement = (
            <a className="ui-link">link</a>
        );
        expect(actualElement).toEqualJSX(expectedElement);
    });

});
