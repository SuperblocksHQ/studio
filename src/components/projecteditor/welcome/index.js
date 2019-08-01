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
import PropTypes from 'prop-types';
import { IconRight } from '../../icons';
import classNames from 'classnames';
import style from './style.less';

export default class Welcome extends Component {

    onCreateNewProjectClick = (e) => {
        this.props.router.control.newDapp(e);
    }

    render() {
        return (
            <div className={style.centerVertically}>
                <div className={style.textWrap}>
                    <h1>Superblocks Lab</h1>
                    <h2>Buidl your thing</h2>
                </div>
                <div className={style.container}>
                    <div className={classNames([style.content, style.contentLeft])}>
                        <img src={'/static/img/img-welcome.svg'}/>
                        <h3>Looks like you don’t have any project created just yet</h3>
                        <p>Create a new project from any of our existing templates to get started</p>
                        <button className="btn2 mt-4" onClick={this.onCreateNewProjectClick}>Create New Project</button>
                    </div>
                    <div className={classNames([style.content, style.contentRight])}>
                       <h2>Upcoming features</h2>
                       <div className={style.linksContainer}>
                            <a href="https://github.com/SuperblocksHQ/superblocks-lab/issues/189" target="_blank" rel="noopener noreferrer" title="Testing support">Testing support for your Smart Contract</a>
                            <a href="https://github.com/SuperblocksHQ/superblocks-lab/issues/368" target="_blank" rel="noopener noreferrer" title="Add Github login and user profiles">Add Github login and user profiles</a>
                            <a href="https://github.com/SuperblocksHQ/superblocks-lab/projects/1" target="_blank" rel="noopener noreferrer" title="Latest updates">
                                <IconRight className={style.arrow} />
                                Find the latest updates
                            </a>
                       </div>
                       <h2>Getting started</h2>
                       <div className={style.linksContainer}>
                            <a href="https://help.superblocks.com/en/articles/3195297-introduction-to-superblocks-lab" target="_blank" rel="noopener noreferrer" title="Introduction">Introduction to Superblocks Lab</a>
                            <a href="https://help.superblocks.com/en/articles/3195301-creating-a-new-project" target="_blank" rel="noopener noreferrer" title="New project">Creating a new project</a>
                            <a href="https://help.superblocks.com/en/articles/3195312-exporting-dapps-to-be-published-on-the-internet" target="_blank" rel="noopener noreferrer" title="Export">Export your DApp</a>
                            <a href="https://help.superblocks.com/en/collections/1865071-superblocks-lab" target="_blank" rel="noopener noreferrer" title="Documentation">
                                <IconRight className={style.arrow} />
                                Check out all the documentation
                            </a>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

Welcome.propTypes = {
    router: PropTypes.object.isRequired,
};
