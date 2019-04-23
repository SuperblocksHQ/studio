// Copyright 2019 Superblocks AB
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
import style from './style.less';
import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../../common';
import { IconBranch, IconCommit } from '../../../icons';
import { BuildStatus } from '../buildList/BuildStatus';
import moment from 'moment';
import BuildConsole from './BuildConsole';
import classNames from 'classnames';

interface IProps {
    build: any;
    location: any;
    match: any;
}

export default class BuildPage extends Component<IProps> {
    render() {
        const build = {
            status: 1,
            buildNumber: 3,
            branch: 'fork-branch',
            buildTime: '00:02:56',
            duration: '1 min and 43 seconds',
            commit: {
                ownerAvatar: 'https://avatars3.githubusercontent.com/u/7814134?v=4&s=24',
                ownerName: 'Javier Taragaza Gomez',
                description: 'Initial commit',
                hash: 'gf245df',
                timestamp: '2019-04-15T12:47:45.090Z'
            }
        };

        return (
            <div className={style.buildPage}>
                <BreadCrumbs>
                    <Link to={`/dashboard`}>Organization Name</Link>
                    <Link to='./'>Project Name</Link>
                    <Link to={'../'}>Builds</Link>
                    <Link to={`/dashboard/project/${this.props.match.params.projectId}/builds/${this.props.match.params.buildId}`}>
                        #{build.buildNumber}
                    </Link>
                </BreadCrumbs>

                <div className={style.title}>
                    <BuildStatus status={build.status} />
                    <h1>{`Build #${build.buildNumber} - ${build.commit.description}`}</h1>
                </div>

                <p className={classNames([style.subtitle, style.flexVerticalCenter])}>
                    {
                        `Triggered ${moment.utc(build.commit.timestamp).fromNow()} by `
                    }
                    <img src={build.commit.ownerAvatar} />
                    <b>{build.commit.ownerName}</b>
                    <span>
                        <IconBranch width='10px' height='10px' />
                        <a href='' className={classNames([style.linkPrimary, style['ml-1']])}>
                            {build.branch}
                        </a>
                    </span>
                    <span>
                        <IconCommit width='10px' height='10px' />
                        <a href='' className={classNames([style.linkPrimary, style['ml-1']])}>
                            {build.commit.hash}
                        </a>
                    </span>
                </p>

                <div className={style.tabNavigation}>
                    <a href='#' className={style.tabItem}>Logs</a>
                </div>
                <div className={style.hr}></div>
                
                <h2>Compile and Test</h2>
                <p>
                    <span><b>Total duration:</b> {build.duration}</span>
                    <span className={style['ml-3']}><b>Queued:</b> 00:01 waiting</span>
                </p>

                <BuildConsole />
            </div>
        );
    }
}
