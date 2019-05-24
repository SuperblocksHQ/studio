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

import { IProject } from '../models';

export const projectsActions = {

    GET_PROJECT_LIST: 'GET_PROJECT_LIST',
    getProjectList(ownerId: string) {
        return {
            type: projectsActions.GET_PROJECT_LIST,
            data: { ownerId }
        };
    },
    GET_PROJECT_LIST_SUCCESS: 'GET_PROJECT_LIST_SUCCESS',
    getProjectListSuccess(projectList: IProject[]) {
        return {
            type: projectsActions.GET_PROJECT_LIST_SUCCESS,
            data: { projectList }
        };
    },
    GET_PROJECT_LIST_FAIL: 'GET_PROJECT_LIST_FAIL',
    getProjectListFail(error: any) {
        return {
            type: projectsActions.GET_PROJECT_LIST_FAIL,
            data: error
        };
    },

    // ---------- MODALS ----------
    TOGGLE_CREATE_PROJECT_MODAL: 'TOGGLE_CREATE_PROJECT_MODAL',
    toggleCreateProjectModal() {
        return {
            type: projectsActions.TOGGLE_CREATE_PROJECT_MODAL,
        };
    },

    TOGGLE_DELETE_PROJECT_MODAL: 'TOGGLE_DELETE_PROJECT_MODAL',
    toggleDeleteProjectModal() {
        return {
            type: projectsActions.TOGGLE_DELETE_PROJECT_MODAL,
        };
    },

    // ---------- CRUD Project actions ----------
    CREATE_PROJECT: 'CREATE_PROJECT',
    createProject({ name, ownerId, ownerType, description }: any, redirect: boolean = false) {
        return {
            type: projectsActions.CREATE_PROJECT,
            data: { name, description, ownerId, ownerType, redirect }
        };
    },
    CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
    createProjectSuccess(project: IProject) {
        return {
            type: projectsActions.CREATE_PROJECT_SUCCESS,
            data: { project }
        };
    },
    CREATE_PROJECT_FAIL: 'CREATE_PROJECT_FAIL',
    createProjectFail(error: string) {
        return {
            type: projectsActions.CREATE_PROJECT_FAIL,
            data: error
        };
    },
    DELETE_PROJECT: 'DELETE_PROJECT',
    deleteProject(projectId: string, organizationId: string) {
       return {
            type: projectsActions.DELETE_PROJECT,
            data: { projectId, organizationId }
       };
    },
    DELETE_PROJECT_SUCCESS: 'DELETE_PROJECT_SUCCESS',
    deleteProjectSuccess() {
       return {
            type: projectsActions.DELETE_PROJECT_SUCCESS
       };
    },
    DELETE_PROJECT_FAIL: 'DELETE_PROJECT_FAIL',
    deleteProjectFail(error: string) {
       return {
            type: projectsActions.DELETE_PROJECT_FAIL,
            data: error
       };
    },
    LOAD_PROJECT_REQUEST: 'LOAD_PROJECT_REQUEST',
    loadProject(projectId: string) {
        return {
            type: projectsActions.LOAD_PROJECT_REQUEST,
            data: { projectId }
        };
    },
    LOAD_PROJECT_SUCCESS: 'LOAD_PROJECT_SUCCESS',
    loadProjectSuccess(project: IProject) {
       return {
            type: projectsActions.LOAD_PROJECT_SUCCESS,
            data: { project }
       };
    },
    LOAD_PROJECT_FAIL: 'LOAD_PROJECT_FAIL',
    loadProjectFail(error: string) {
       return {
            type: projectsActions.LOAD_PROJECT_FAIL,
            data: error
       };
    },
    RENAME_PROJECT: 'RENAME_PROJECT',
    renameProject(newName: string) {
       return {
            type: projectsActions.RENAME_PROJECT,
            data: { newName }
       };
    },
    RENAME_PROJECT_FAIL: 'RENAME_PROJECT_FAIL',
    renameProjectFail(error: string) {
        return {
            type: projectsActions.RENAME_PROJECT_FAIL,
            data: error
        };
    },

    // ---------- PROJECT UPDATES ----------
    UPDATE_PROJECT_DETAILS: 'UPDATE_PROJECT_DETAILS',
    updateProjectDetails(newDetails: Partial<IProject>) {
       return {
            type: projectsActions.UPDATE_PROJECT_DETAILS,
            data: newDetails
       };
    },
    UPDATE_PROJECT_DETAILS_SUCCESS: 'UPDATE_PROJECT_DETAILS_SUCCESS',
    updateProjectDetailsSuccess(project: IProject) {
       return {
            type: projectsActions.UPDATE_PROJECT_DETAILS_SUCCESS,
            data: { project }
       };
    },
    UPDATE_PROJECT_DETAILS_FAIL: 'UPDATE_PROJECT_DETAILS_FAIL',
    updateProjectDetailsFail(error: string) {
       return {
            type: projectsActions.UPDATE_PROJECT_DETAILS_FAIL,
            data: error
       };
    },

    // ---------- PROJECT REPOSITORY ----------
    CONNECT_PROJECT_REPOSITORY: 'CONNECT_PROJECT_REPOSITORY',
    connectProjectRepository(id: string, vcsUrl: string, vcsType: string) {
        return {
            type: projectsActions.CONNECT_PROJECT_REPOSITORY,
            data: { id, vcsUrl, vcsType }
        };
    },
    CONNECT_PROJECT_REPOSITORY_SUCCESS: 'CONNECT_PROJECT_REPOSITORY_SUCCESS',
    connectProjectRepositorySuccess() {
        return {
            type: projectsActions.CONNECT_PROJECT_REPOSITORY_SUCCESS
        };
    },
    CONNECT_PROJECT_REPOSITORY_FAIL: 'CONNECT_PROJECT_REPOSITORY_FAIL',
    connectProjectRepositoryFail(error: string) {
        return {
            type: projectsActions.CONNECT_PROJECT_REPOSITORY_FAIL,
            data: error
        };
    },

    DISCONNECT_PROJECT_REPOSITORY: 'DISCONNECT_PROJECT_REPOSITORY',
    disconnectProjectRepository(id: string) {
        return {
            type: projectsActions.DISCONNECT_PROJECT_REPOSITORY,
            data: { id }
        };
    },
    DISCONNECT_PROJECT_REPOSITORY_SUCCESS: 'DISCONNECT_PROJECT_REPOSITORY_SUCCESS',
    disconnectProjectRepositorySuccess() {
        return {
            type: projectsActions.DISCONNECT_PROJECT_REPOSITORY_SUCCESS
        };
    },
    DISCONNECT_PROJECT_REPOSITORY_FAIL: 'DISCONNECT_PROJECT_REPOSITORY_FAIL',
    disconnectProjectRepositoryFail(error: string) {
        return {
            type: projectsActions.DISCONNECT_PROJECT_REPOSITORY_FAIL,
            data: error
        };
    },
};
