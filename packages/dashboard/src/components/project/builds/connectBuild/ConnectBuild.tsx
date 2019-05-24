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
import { Link, Redirect } from 'react-router-dom';
import { BreadCrumbs, StyledButton } from '../../../common';
import { StyledButtonType, IProject, IOrganization, RepoListScreenType } from '../../../../models';
import { IconGithub } from '../../../common/icons';
import GithubRepositoryList from '../../../githubRepositoryList';
import OnlyIf from '../../../common/onlyIf';

interface IProps {
    project: IProject;
    organization: IOrganization;
    build: any;
    location: any;
    match: any;
}

export default class ConnectBuild extends Component<IProps> {
    render() {
        const { project, organization } = this.props;
        return (
            <div className={style.connectBuild}>
                <BreadCrumbs>
                    <Link to={`/${this.props.match.params.organizationId}`}>{organization.name}</Link>
                    <Link to={`/${this.props.match.params.organizationId}/projects/${this.props.match.params.projectId}/builds`}>{project.name}</Link>
                    <Link to={`/${this.props.match.params.organizationId}/projects/${this.props.match.params.projectId}/builds`}>Builds</Link>
                    <Link to={window.location.pathname}>Connect to repository</Link>
                </BreadCrumbs>

                <div className={style.title}>
                    <h1>Connect to repository</h1>
                    <a href={process.env.REACT_APP_GITHUB_APP_URL} target='_blank' rel='noreferrer noopener'>
                        <StyledButton icon={<IconGithub />} type={StyledButtonType.Primary} text={'Configure Github App'} className={style.btnConfigure} />
                    </a>
                </div>

                <OnlyIf test={project.vcsUrl && project.vcsType}>
                    <Redirect to={`/${organization.id}/projects/${project.id}/builds`} />
                </OnlyIf>

                <GithubRepositoryList projectId={project.id} screenType={RepoListScreenType.ConnectToRepo}/>
            </div>
        );
    }
}
