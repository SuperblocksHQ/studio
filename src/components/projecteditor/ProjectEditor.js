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
import classNames from 'classnames';
import style from './style.less';
import Control from './control';
import Panes from './panes';
import TopBar from '../topbar';
import BottomBar from '../bottomBar';
import ContactContainer from '../contactContainer';
import SplitterLayoutBase from 'react-splitter-layout';
import { PreviewSidePanel, TransactionLogPanel } from './sidePanels';
import { IconTransactions, IconShowPreview, IconFileAlt, IconClose } from '../icons';
import { SideButton } from './sideButton';
import classnames from 'classnames';
import OnlyIf from '../onlyIf';

class SplitterLayout extends SplitterLayoutBase {
    handleResize() {
        // all this does is just disabling recalculation of sizes in non-persengate mode when window is resized
    }
}

export default class ProjectEditor extends Component {
    state = {
        EVMInit: false,
        sidePanelDragging: false
    };

    constructor(props) {
        super(props);

        this.props.router.register('main', this);

        // Mute defalt ctrl-s behavior.
        window.addEventListener(
            'keydown',
            function(e) {
                if (
                    e.keyCode === 83 &&
                    (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
                ) {
                    e.preventDefault();
                }
            },
            false
        );
    }

    componentDidUpdate(prevProps) {
        // if project is present, init EVM if not already initialized
        if(this.props.router.control.getActiveProject() && !this.state.EVMInit){
            this.initEVM()
        }

        // update the code editor panes when side panel opens or closes
        const wasSidePanelOpen = prevProps.displayTransactionsPanel || prevProps.previewSidePanel.open;
        const isSidePanelOpen = this.props.displayTransactionsPanel || this.props.previewSidePanel.open;
        if (wasSidePanelOpen !== isSidePanelOpen) {
            this.onPanesSizeChange();
        }
    }

    initEVM = () => {
        this.setState({
            EVMInit: true
        }, () => {
            // open wallet & start EVM
            this.props.functions.wallet.openWallet(
                'development',
                this.props.knownWalletSeed,
                () => {
                    this.props.functions.EVM.init();
                }
            );
        })
    };

    redraw = all => {
        if (this.props.router.control) {
            this.props.router.control.redraw();
        }
        if (this.props.router.app) {
            this.props.router.app.redraw(all);
        }
        if (this.props.router.panes) {
            this.props.router.panes.redraw(all);
        }
        this.forceUpdate();
    };

    toggleSidePanelDragging() {
        this.setState({ sidePanelDragging: !this.state.sidePanelDragging });
    }

    onPanesSizeChange() {
        if (this.props.router.panes) {
            this.props.router.panes.redraw(false);
        }
    }

    onProjectSelectedHandle = () => {
        const { closeTransactionsHistoryPanel } = this.props;
        closeTransactionsHistoryPanel();
    };

    onCloseBannerClick = () => {
        const { closeBanner } = this.props;
        closeBanner();
    }

    render() {
        const { displayTransactionsPanel, displayFileSystemPanel, previewSidePanel, toggleTransactionsHistoryPanel, toggleFileSystemPanel,
                previewSidePanelActions, selectedEnvironment, showBanner } = this.props;

        return (
            <div className={style.projecteditor}>
                <OnlyIf test={showBanner}>
                    <div className={style.banner}>
                        <p>Check out our new <a href="https://superblocks.com" title='Superblocks home site'>Superblocks</a> platform for building and releasing smart contracts. <a href="https://superblocks.com/blog/introducing-the-superblocks-platform/" title='Superblocks home site'>Read more about it!</a></p>
                        <button
                            className={classNames([ style.icon, 'btnNoBg', ])}
                            onClick={this.onCloseBannerClick}>
                            <IconClose />
                        </button>
                    </div>
                </OnlyIf>
                <TopBar
                    router={this.props.router}
                    functions={this.props.functions}
                    onProjectSelected={this.onProjectSelectedHandle}
                />
                <div className={style.mainWrapper}>
                    <div className={classnames([style.sideButtonsContainer, style.sideButtonsContainerLeft])}>
                        <SideButton name="Explorer"
                            icon={<IconFileAlt style={{width: 12}} />}
                            onClick={() => {
                                    toggleFileSystemPanel();
                                    this.onPanesSizeChange();
                                }
                            }
                        />
                    </div>

                    <div className={style.mainLayout}>
                        <SplitterLayout
                            primaryIndex={1}
                            secondaryMinSize={0}
                            secondaryInitialSize={280}
                            onSecondaryPaneSizeChange={() => this.onPanesSizeChange()}
                            customClassName={!displayFileSystemPanel ? "hideFileSystemPanel" : null}>
                            <div className={style.control}>
                                <Control
                                    router={this.props.router}
                                    functions={this.props.functions}
                                    isImportedProject={this.props.isImportedProject}
                                    toggleFileSystemPanel={toggleFileSystemPanel}
                                />
                                <ContactContainer />
                            </div>
                            <div>
                                <SplitterLayout
                                    primaryIndex={0}
                                    secondaryMinSize={232}
                                    secondaryInitialSize={500}
                                    onDragStart={() => this.toggleSidePanelDragging()}
                                    onDragEnd={() => this.toggleSidePanelDragging()}
                                    onSecondaryPaneSizeChange={() => this.onPanesSizeChange()}>

                                    <Panes dragging={this.state.sidePanelDragging} router={this.props.router} functions={this.props.functions} />

                                    { displayTransactionsPanel &&
                                    <TransactionLogPanel
                                        dragging={this.state.sidePanelDragging}
                                        router={this.props.router}
                                        onClose={toggleTransactionsHistoryPanel}
                                        selectedEnvironment={selectedEnvironment.name}
                                    /> }

                                    { previewSidePanel.open &&
                                    <PreviewSidePanel
                                        dragging={this.state.sidePanelDragging}
                                        {...previewSidePanel}
                                        {...previewSidePanelActions}
                                        selectedEnvironment={selectedEnvironment.name}
                                    /> }

                                </SplitterLayout>
                            </div>
                        </SplitterLayout>
                    </div>
                    <BottomBar endpoint={selectedEnvironment.endpoint} />

                    <div className={classnames([style.sideButtonsContainer, style.sideButtonsContainerRight])}>
                        <SideButton name="Transactions"
                            icon={<IconTransactions />}
                            onClick={toggleTransactionsHistoryPanel}  />

                        <SideButton name="Preview"
                            icon={<IconShowPreview />}
                            onClick={previewSidePanelActions.onOpen}  />
                    </div>
                </div>
            </div>
        );
    }
}
