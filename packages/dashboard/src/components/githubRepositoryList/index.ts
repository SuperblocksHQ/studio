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

import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { userActions, organizationActions, projectsActions } from '../../actions';
import { userSelectors } from '../../selectors';
import GithubRepositoryList from './GithubRepositoryList';
import { VcsType, RepoListScreenType } from '../../models';

const mapStateToProps = (state: any) => ({
    repositoryList: userSelectors.getUserRepositoryList(state),
    isRepositoriesLoading: userSelectors.isRepositoriesLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        getUserRepositoryList: () => {
            dispatch(userActions.getUserRepositoryList());
        },
        checkGithubRepoPermissions: (repoOwnerId: number, repositoryId: number, screenType: RepoListScreenType, projectId?: string) => {
            dispatch(userActions.checkRepositoryPermissions(repoOwnerId, repositoryId, screenType, projectId));
        },
        createDefaultOrganization: (organizationName: string, projectName: string, vcsUrl: string, vcsType: VcsType) => {
            dispatch(organizationActions.createDefaultOrganization(organizationName, projectName, vcsUrl, vcsType));
        },
        connectProjectRepository: (id: string, vcsUrl: string, vcsType: VcsType) => {
            dispatch(projectsActions.connectProjectRepository(id, vcsUrl, vcsType));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubRepositoryList);
