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
import { projectsActions } from '../../../actions';
import { projectSelectors } from '../../../selectors';
import ProjectList from './ProjectList';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

const mapStateToProps = (state: any) => ({
    list: projectSelectors.getProjectList(state),
    isListLoading: projectSelectors.isProjectListLoading(state)
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        getProjectList: () => {
            dispatch(projectsActions.getProjectList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
