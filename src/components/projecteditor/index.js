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

import { connect } from 'react-redux';
import ProjectEditor from './ProjectEditor';
import { getSelectedEnvironment } from '../../selectors/projects';
import { sidePanelsActions } from '../../actions';

const mapStateToProps = state => ({
    displayTransactionsPanel: state.sidePanels.showTransactionsHistory,
    previewSidePanel: state.sidePanels.preview,
    selectedEnvironment: getSelectedEnvironment(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTransactionsHistoryPanel() {
            dispatch(sidePanelsActions.toggleTransactionsHistoryPanel())
        },
        openTransactionsHistoryPanel() {
            dispatch(sidePanelsActions.openTransactionsHistoryPanel())
        },
        closeTransactionsHistoryPanel() {
            dispatch(sidePanelsActions.closeTransactionsHistoryPanel())
        },
        
        previewSidePanelActions: {
            onClose() {
                dispatch(sidePanelsActions.preview.togglePanel());
            },
            onOpen() {
                dispatch(sidePanelsActions.preview.togglePanel());
            },
            onHideModals() {
                dispatch(sidePanelsActions.preview.hideModals());
            },
            onTryDownload(hasExportableContent, currentEnvironment) {
                dispatch(sidePanelsActions.preview.tryDownload(hasExportableContent, currentEnvironment));
            },
            onDownload() {
                dispatch(sidePanelsActions.preview.download());
            },
            onToggleWeb3Accounts() {
                dispatch(sidePanelsActions.preview.toggleWeb3Accounts());
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditor);
