// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './style.less';
import { Pane, PaneComponent } from './pane';
import { IconClose } from '../icons';
import { DropdownContainer } from '../dropdown';

export default class Panes extends Component {
    constructor(props) {
        super(props);
        this.panes = [];
        this.activePaneId = null;
        this.state = {
            mousePosition: 0
        }
        props.router.register('panes', this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.redraw();
        });
    }

    addWindow = (props, paneId) => {
        var pane;
        if (paneId) {
            pane = this.getPane(paneId).pane;
        }
        if (!pane) {
            pane = new Pane({
                router: this.props.router,
                id: this.props.functions.generateId(),
                parent: this,
            });
            this.panes.unshift(pane);
        }
        var winId = pane.addWindow(props);
        if (winId == null) return {};
        return { pane, winId };
    };

    focusWindow = (paneId, winId, rePerform, cb) => {
        this.activePaneId = paneId;
        var { pane } = this.getPane(paneId);
        pane.focusWindow(winId, rePerform, cb);
    };

    closeWindow = (paneId, winId, cb, silent) => {
        var { pane } = this.getPane(paneId);
        pane.closeWindow(winId, cb, silent);
    };

    removePane = id => {
        this.panes = this.panes.filter(pane => {
            return pane.id != id;
        });
    };

    getPane = id => {
        var pane = null;
        var index = null;
        for (var paneIndex = 0; paneIndex < this.panes.length; paneIndex++) {
            var pane2 = this.panes[paneIndex];
            if (pane2.id == id) {
                pane = pane2;
                index = paneIndex;
                break;
            }
        }
        return { pane, index };
    };

    // Search all panes for a specific window.
    getWindowByItem = item => {
        var pane = null;
        var win = null;
        for (var paneIndex = 0; paneIndex < this.panes.length; paneIndex++) {
            var pane2 = this.panes[paneIndex];
            var win2 = pane2.getWindowByItem(item);
            if (win2) {
                pane = pane2;
                win = win2;
                break;
            }
        }
        return { pane: pane, winId: win ? win.getItemId() : null };
    };

    getActivePane = () => {
        return this.getPane(this.activePaneId).pane;
    };

    redraw = all => {
        const props = {};
        var panes;
        if (all) {
            props.all = true;
            panes = this.panes;
        } else {
            panes = [];
            const pane = this.getActivePane();
            if (pane) panes.push(pane);
        }
        this.forceUpdate();
        setTimeout(() => {
            for (var index = 0; index < panes.length; index++)
                panes[index].redraw(props);
        }, 1);
    };

    openItem = (item, targetPaneId, cb) => {
        // Check if item is already opened.
        var { pane, winId } = this.getWindowByItem(item);
        if (pane && winId) {
            this.focusWindow(pane.id, winId, true, cb);
        } else {
            if (targetPaneId) {
                var { pane } = this.getPane(targetPaneId);
                if (pane == null) return false;
                if (pane.windowsCount() >= 4) {
                    targetPaneId = null;
                }
            }
            var { pane, winId } = this.addWindow(
                {
                    item: item,
                    router: this.props.router,
                    functions: this.props.functions,
                },
                targetPaneId
            );
            this.focusWindow(pane.id, winId, false, cb);
        }
        this.forceUpdate();
        return true;
    };

    closeItem = (item, cb, silent) => {
        // Check so item is already opened.
        var { pane, winId } = this.getWindowByItem(item);
        if (pane && winId) {
            this.closeWindow(pane.id, winId, cb, silent);
        }
    };

    tabRightClicked = (e, id) => {
        // We save the pane id for when closing all other panes.
        e.preventDefault();
        this.setState({ showContextMenuPaneId: id, mousePosition: e.pageX });
    };

    tabClicked = (e, id) => {
        e.preventDefault();
        // Close file on middle click
        if(e.button == 1) {
            this.tabClickedClose(e, id);
            return;
        }
        this.activePaneId = id;
        this.forceUpdate();
    };

    tabClickedClose = (e, paneId) => {
        e.preventDefault();
        e.stopPropagation(); // Important so we don't trigger tabClicked
        this.closePane(paneId);
    };

    closeAll = (cb, keepPaneId, silent) => {
        const fn = () => {
            if (this.panes.length == 0) {
                if (cb) cb(0);
                return;
            }
            var pane = this.panes[0];
            if (keepPaneId == pane.id) {
                if (this.panes.length > 1) {
                    pane = this.panes[1];
                } else {
                    if (cb) cb(0);
                    return;
                }
            }
            this.closePane(
                pane.id,
                status => {
                    if (status == 0) {
                        fn();
                    } else {
                        if (cb) cb(1);
                    }
                },
                silent
            );
        };
        fn();
    };

    closePane = (paneId, cb, silent) => {
        var { pane, index } = this.getPane(paneId);
        pane.closeAll(
            status => {
                if (status == 0) {
                    this.removePane(paneId);
                    var pane = this.panes[index] || this.panes[index - 1];
                    if (pane) {
                        this.activePaneId = pane.id;
                    } else {
                        this.activePaneId = null;
                    }
                    this.forceUpdate();
                }
                if (cb) cb(status);
            },
            null,
            silent
        );
    };

    closeAllPanes = e => {
        e.preventDefault();
        this.closeAll();
    };

    closeAllOtherPanes = e => {
        e.preventDefault();
        this.closeAll(null, this.state.showContextMenuPaneId);
    };

    renderHeader = () => {
        const tab = style.tab;
        const selected = style.selected;
        const html = this.panes.map((pane, index) => {
            const contextMenu = (
                <div className={classnames([style.contextMenu])} style={{left: this.state.mousePosition}}>
                    <div className={style.item} onClick={this.closeAllPanes}>
                        Close all
                    </div>
                    <div className={style.item} onClick={this.closeAllOtherPanes}>
                        Close all other
                    </div>
                </div>
            );
            var isSelected = pane.id == this.activePaneId;
            const cls = {};
            cls[tab] = true;
            cls[selected] = isSelected;
            return (
                <div
                    key={index}
                    onMouseDown={e => this.tabClicked(e, pane.id)}
                    onContextMenu={e => this.tabRightClicked(e, pane.id)}
                >
                    <DropdownContainer
                        className={classnames(cls)}
                        dropdownContent={contextMenu}
                        useRightClick={true}
                    >
                        <div className={style.tabContainer}>
                            <div className={style.title}>
                                <div className={style.icon}>
                                    {pane.getIcon()}
                                </div>
                                <div className={style.title2}>
                                    {pane.getTitle()}
                                </div>
                            </div>
                            <div className={style.close}>
                                <button className="btnNoBg"
                                    onClick={ e =>
                                        this.tabClickedClose(e, pane.id)
                                    }
                                >
                                    <IconClose />
                                </button>
                            </div>
                        </div>
                    </DropdownContainer>
                </div>
            );
        });
        return <React.Fragment>{html}</React.Fragment>;
    };

    getPaneHeight = () => {
        const a = document.getElementById('panes');
        const b = document.getElementById('panes_header');
        return a.offsetHeight - b.offsetHeight - 80; // 80 is the magic number to adjust for height taken by borders/toolbars.
    };

    renderPanes = () => {
        const default1 = style.pane;
        const visible = style.visible;
        const html = this.panes.map((pane, index) => {
            var isVisible = pane.id == this.activePaneId;
            const cls = {};
            cls[default1] = true;
            cls[visible] = isVisible;
            const key = 'pane_' + pane.id;
            // NOTE: We are prematurely setting the display property of the pane
            // because it will affect any javascript "offsetHeight" which will
            // otherwise get 0 when the pane goes from invisible to visible.
            // I don't think there's any harm in doing this.
            if (isVisible) {
                var paneObj = document.getElementById(key);
                if (paneObj) {
                    paneObj.style.display = 'block';
                }
            } else {
                var paneObj = document.getElementById(key);
                if (paneObj) paneObj.style.display = 'none';
            }
            const maxHeight = {
                height: this.getPaneHeight() + 'px',
            };
            return (
                <div
                    key={key}
                    id={key}
                    className={classnames(cls)}
                    style={maxHeight}
                >
                    <PaneComponent obj={pane} />
                </div>
            );
        });
        return <div>{html}</div>;
    };

    render() {
        const header = this.renderHeader();
        const panes = this.renderPanes();

        const { isActionPanelShowing } = this.props;

        return (
            <div
                key="panes"
                id="panes"
                className="full"
                style={{
                    width: isActionPanelShowing ? 'calc(100% - 450px)' : '100%',
                }}
            >
                <div key="header" id="panes_header" className={style.header}>
                    {header}
                </div>
                <div key="panes2" className={style.panes}>
                    {panes}
                </div>
            </div>
        );
    }
}

Panes.propTypes = {
    router: PropTypes.object.isRequired,
    functions: PropTypes.object.isRequired,
    isActionPanelShowing: PropTypes.bool.isRequired,
};
