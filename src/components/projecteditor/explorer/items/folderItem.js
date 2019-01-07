import React from 'react';
import { IconFolder, IconFolderOpen, IconAddFile, IconImportFile, IconAddFolder, IconEdit, IconTrash } from '../../../icons';
import Tooltip from '../../../tooltip';
import { BaseItem } from './baseItem';
import style from './style.less';

function getToolbar(props) {
    return (
        <div className={style.buttonsWrapper}>
            <div className={style.buttons} onClick={e => e.stopPropagation()}>
                <a href="#" title="New File" onClick={() => props.onCreateFileClick(props.data.id) }>
                    <Tooltip title="New File">
                        <IconAddFile />
                    </Tooltip>
                </a>
                <a href="#" title="New Folder" onClick={() => props.onCreateFolderClick(props.data.id)}>
                    <Tooltip title="New Folder">
                        <IconAddFolder />
                    </Tooltip>
                </a>
                { props.data.mutable &&
                <React.Fragment>
                    <a href="#" title="Rename" onClick={() => props.onRenameClick(props.data.id)}>
                        <Tooltip title="Rename">
                            <IconEdit />
                        </Tooltip>
                    </a>
                    <a href="#" title="Delete" onClick={() => props.onDeleteClick(props.data.id)} >
                        <Tooltip title="Delete">
                            <IconTrash />
                        </Tooltip>
                    </a>
                </React.Fragment> }
            </div>
        </div>
    );
}

export function FolderItem(props) {
    const toolbar = getToolbar(props);

    const contextMenu=(
        <div className={ style.contextMenu }>
            <div onClick={ props.onCreateFileClick }>
                <div className={style.icon} >
                    <IconAddFile />
                </div>
                Create File
            </div>
            <div onClick={ props.onImportFileClick }>
                <div className={style.icon} >
                    <IconImportFile />
                </div>
                Import File
            </div>
            <div onClick={ props.onCreateFolderClick }>
                <div className={style.icon} >
                    <IconAddFolder />
                </div>
                Create Folder
            </div>
            { props.data.mutable &&
                <React.Fragment>
                <div onClick={ props.onRenameClick }>
                    <div className={style.icon}>
                        <IconEdit />
                    </div>
                    Rename
                </div>
                <div onClick={ props.onDeleteClick }>
                    <div className={style.icon}>
                        <IconTrash />
                    </div>
                    Delete
                </div>
                </React.Fragment>
            }
        </div>
    );

    return (
        <BaseItem
            { ...props }
            toolbar={ toolbar }
            icon={ <IconFolder /> }
            iconOpen={ <IconFolderOpen /> }
            contextMenu={ contextMenu }>
        </BaseItem>
    );
}
