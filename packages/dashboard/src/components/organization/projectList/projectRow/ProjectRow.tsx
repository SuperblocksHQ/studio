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
import { IProject } from '../../../../models';
import moment from 'moment';
import { Link } from 'react-router-dom';
import OnlyIf from '../../../common/onlyIf';
import { LetterAvatar } from '../../../common';

interface IProps {
    project: IProject;
    organizationId: string;
    orderBy: string;
}

export default class ProjectRow extends Component<IProps> {

    render() {
        const { organizationId, project, orderBy }  = this.props;

        return (
            <Link to={`${organizationId}/projects/${project.id}/builds`} className={style.container}>
                <div className={style.projectInfo}>
                    <LetterAvatar title={project.name} className={style.letterAvatar} />
                    <div>
                        <div className={style.name}>
                            {project.name}
                        </div>
                        <OnlyIf test={project.description}>
                            <div className={style.description}>
                                {project.description}
                            </div>
                        </OnlyIf>
                    </div>
                </div>
                <div className={style.timestamp}>
                    { orderBy === 'createdAt'
                        ? `Created ${moment.utc(project.createdAt).fromNow()}`
                        : `Edited ${moment.utc(project.lastModifiedAt).fromNow()}`
                    }
                </div>
            </Link>
        );
    }
}