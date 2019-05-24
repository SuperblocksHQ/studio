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
import classNames from 'classnames';
import { GenericLoading, DropdownContainer } from '../common';
import { IGithubRepository, IGithubRepositoryOwner, StyledButtonType, RepoListScreenType } from '../../models';
import { IconFilter, IconChevronDown, IconClose, IconGithub } from '../common/icons';
import { StyledButton } from '../common/buttons/StyledButton';
import OnlyIf from '../common/onlyIf';

interface IProps {
    className?: string;
    repositoryList: IGithubRepository[];
    isRepositoriesLoading: boolean;
    projectId?: string;
    screenType: RepoListScreenType;
    getUserRepositoryList: () => void;
    checkGithubRepoPermissions: (repoOwnerId: number, repositoryId: number, screenType: RepoListScreenType, projectId?: string) => void;
}

interface IState {
    filteredRepositories: IGithubRepository[];
    searchFilter: string;
    ownerFilterId: number;
    ownerFilterName: string;
    ownerFilterAvatar: string;
}

export default class GithubRepositoryList extends Component<IProps, IState> {

    state = {
        filteredRepositories: this.props.repositoryList,
        searchFilter: '',
        ownerFilterId: -1,
        ownerFilterName: '',
        ownerFilterAvatar: ''
    };

    componentDidMount() {
        this.props.getUserRepositoryList();
    }

    onSearchInputChange(e: any) {
        this.setState({
            searchFilter: e.target.value
        });
    }

    onFilterOwnerChange = (id: number, name: string, avatar: string) => {
        this.setState({
            ownerFilterId: id !== this.state.ownerFilterId ? id : -1,
            ownerFilterName: name !== this.state.ownerFilterName ? name : '',
            ownerFilterAvatar: avatar !== this.state.ownerFilterAvatar ? avatar : ''
        });
    }

    resetFilter = () => {
        this.setState({
            searchFilter: '',
            ownerFilterId: -1,
            ownerFilterName: '',
            ownerFilterAvatar: ''
        });
    }

    removeDuplicatesByProperty(myArr: any[], prop: string) {
        return myArr.filter((obj: any, pos: number, arr: any[]) => {
            return arr.map((mapObj: any) => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }

    getOwners = () => {
        const owners = this.props.repositoryList.map((repo: IGithubRepository) => repo.owner);
        return this.removeDuplicatesByProperty(owners, 'id');
    }

    handleOnBuildClick = (repo: IGithubRepository) => {
        const { screenType, checkGithubRepoPermissions, projectId } = this.props;

        checkGithubRepoPermissions(repo.owner.id, repo.id, screenType, projectId);
    }

    render() {
        const { className, repositoryList, isRepositoriesLoading } = this.props;
        const { searchFilter, ownerFilterId, ownerFilterName, ownerFilterAvatar } = this.state;
        const owners = this.getOwners();

        const filteredRepositories = repositoryList
            .filter((repo: IGithubRepository) =>
                (searchFilter === '' || repo.fullName.toLowerCase().includes(searchFilter.toLowerCase())) &&
                (ownerFilterId === -1 || repo.owner.id === ownerFilterId ));

        return (
            <div className={classNames([style.container, className])}>
                <div className={style.left}>
                    <div className={style.searchInput}>
                        <IconFilter className={style.icon} />
                        <input type='text' placeholder='Filter projects...' value={searchFilter} onChange={this.onSearchInputChange.bind(this)} />
                    </div>

                    <p>If you don't see your project listed here, make sure to <a href={process.env.REACT_APP_GITHUB_APP_URL} target='_blank' rel='noreferrer noopener'>grant us access</a></p>

                    <div className={style.repoList}>
                        { filteredRepositories.map((repo: IGithubRepository, index: number) =>
                            <div key={index} className={style.singleRepo}>
                                <img src={`${repo.owner.avatarUrl}&s=48`} alt={repo.owner.login} />
                                <div className={style.repoTitle}>{repo.fullName}</div>
                                <OnlyIf test={repo.private}>
                                    <div className={style.repoPrivate}>Private</div>
                                </OnlyIf>
                                <StyledButton type={StyledButtonType.Primary} onClick={() => this.handleOnBuildClick(repo)} text='Build' className={style.btnBuild}/>
                            </div>
                        )}

                        {/* Show 'Reset filter' button when filtering results into 0 repositories */}
                        <OnlyIf test={searchFilter && filteredRepositories.length <= 0}>
                            <div className={style.resetFilter}>
                                <p>No repositories found</p>
                                <StyledButton type={StyledButtonType.Primary} onClick={() => this.resetFilter()} text='Reset filter' />
                            </div>
                        </OnlyIf>

                        {/* Show loader until we have repositories available */}
                        <OnlyIf test={isRepositoriesLoading && repositoryList.length <= 0}>
                            <GenericLoading />
                        </OnlyIf>
                    </div>
                </div>
                <div className={style.right}>
                    <OnlyIf test={owners.length}>
                        <DropdownContainer
                            dropdownContent={
                                <div className={classNames([style.organizationsList])}>
                                    <div onClick={() => this.onFilterOwnerChange(-1, '', '')} className={classNames([style.singleOrganization, ownerFilterId === -1 ? style.active : null])}>
                                        <div className={style.githubIcon}>
                                            <IconGithub color={'white'} />
                                        </div>
                                        <div className={style.orgTitle}>All repositories</div>
                                    </div>
                                    { owners.map((owner: IGithubRepositoryOwner, index: number) =>
                                        <div onClick={() => this.onFilterOwnerChange(owner.id, owner.login, owner.avatarUrl)}
                                            className={classNames([style.singleOrganization, owner.id === ownerFilterId ? style.active : null])}
                                            key={index}
                                        >
                                            <div className={style.avatarContainer}>
                                                <img src={`${owner.avatarUrl}&s=48`}/>
                                            </div>
                                            <div className={style.orgTitle}>{owner.login}</div>
                                            <OnlyIf test={owner.id === ownerFilterId}>
                                                <div className={style.icon}>
                                                    <IconClose />
                                                </div>
                                            </OnlyIf>
                                        </div>
                                    )}
                                </div>
                            }>
                                <p className={style.ownersDropdownContainer}>
                                    {ownerFilterAvatar ? <img src={`${ownerFilterAvatar}&s=48`} alt={ownerFilterName} /> : ''}
                                    {ownerFilterName ? ownerFilterName : 'All repositories'}
                                    <IconChevronDown className={style.ownersDropdown} />
                                </p>
                        </DropdownContainer>
                    </OnlyIf>
                </div>
            </div>
        );
    }
}
