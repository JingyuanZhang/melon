/**
 * @file Example / Button
 * @author cxtom<cxtom2010@gmail.com>
 */

import React from 'react';
import Tabs from 'melon/Tabs';
import Button from 'melon/Button';
import Icon from 'melon/Icon';
import Tab from 'melon/tabs/Tab';

module.exports = function () {

    return (
        <Tabs>
            <Tab label="Flat Buttons">
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button>default</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['primary']}>primary</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['secondery']}>secondery</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['success']}>success</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['info']}>info</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['warning']}>warning</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['danger']}>danger</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['danger']}>
                            <Icon icon="add" />
                        </Button>
                    </div>
                </div>
            </Tab>
            <Tab label="Raised Buttons">
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised']}>default</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'primary']}>primary</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'secondery']}>secondery</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'success']}>success</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'info']}>info</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'warning']}>warning</Button>
                    </div>
                </div>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'danger']}>danger</Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['raised', 'danger']}>
                            <Icon icon="add" />
                        </Button>
                    </div>
                </div>
            </Tab>
            <Tab label="Floating Buttons">
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Button variants={['floating', 'success']}>
                            <Icon icon="add" />
                        </Button>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Button variants={['floating', 'primary']}>
                            <Icon icon="edit" />
                        </Button>
                    </div>
                </div>
            </Tab>
        </Tabs>
    );

};
