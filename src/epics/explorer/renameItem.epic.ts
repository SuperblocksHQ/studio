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

import { switchMap, catchError } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { explorerActions } from '../../actions';
import { projectSelectors } from '../../selectors';
import { projectsService } from '../../services';
import { empty } from 'rxjs';

export const renameItemEpic: Epic = (action$, state$) => action$.pipe(
    ofType(explorerActions.RENAME_ITEM),
    switchMap(() => {
        const projectId = projectSelectors.getSelectedProjectId(state$.value);
        const explorerState = state$.value.explorer;

        if (explorerState.itemNameValidation.isValid) {
            return projectsService.updateProject({ id: projectId, tree: explorerState.tree }).pipe(
                switchMap(() => empty()),
                catchError(() => [ explorerActions.renameItemFail(explorerState.itemNameValidation.itemId, explorerState.itemNameValidation.oldName) ])
            );
        } else {
            alert('Invalid file or folder name.');
            return empty();
        }
    })
);
