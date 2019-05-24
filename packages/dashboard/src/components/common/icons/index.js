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

import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {faSync as iconRun} from '@fortawesome/free-solid-svg-icons/faSync'
import {faSave as iconSave} from '@fortawesome/free-regular-svg-icons/faSave';
import {faPuzzlePiece as iconCompile} from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import {faTrashAlt as iconTrash} from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import {faGem as iconGem} from '@fortawesome/free-regular-svg-icons/faGem';
import {faFile as iconFile} from '@fortawesome/free-solid-svg-icons/faFile';
import {faFileAlt as iconFileAlt} from '@fortawesome/free-regular-svg-icons/faFileAlt';
import {faFileImport as IconFileImport} from '@fortawesome/free-solid-svg-icons/faFileImport';
import {faFolder as iconFolder} from '@fortawesome/free-solid-svg-icons/faFolder';
import {faFolder as iconFolderOpen} from '@fortawesome/free-regular-svg-icons/faFolder';
import {faCube as iconCube} from '@fortawesome/free-solid-svg-icons/faCube';
import {faPlusSquare as iconPlus} from '@fortawesome/free-solid-svg-icons/faPlusSquare';
import {faArrowUp as iconUp} from '@fortawesome/free-solid-svg-icons/faArrowUp';
import {faArrowDown as iconDown} from '@fortawesome/free-solid-svg-icons/faArrowDown';
import {faLongArrowAltRight as iconRight} from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight';
import {faClone as iconClone} from '@fortawesome/free-solid-svg-icons/faClone';
import {faTwitter as iconTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faGithub as iconGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faDiscord as iconDiscord} from '@fortawesome/free-brands-svg-icons/faDiscord';
import {faLock as iconLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faLockOpen as iconLockOpen} from '@fortawesome/free-solid-svg-icons/faLockOpen';
import {faPencilAlt as iconPencil} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faArrowAltCircleDown as iconDownload} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleDown';
import {faThLarge as iconMosaic} from '@fortawesome/free-solid-svg-icons/faThLarge';
import {faCopy as iconCopy} from '@fortawesome/free-regular-svg-icons/faCopy';

class IconImg extends Component {
    render() {
        const { width, height, ...props } = this.props;

        const defaults = {
            height: height || 14,
            width: width || 14,
        };

        return <img {...props} {...defaults} />;
    }
}

export const IconDeployGreen = ({...props}) => <IconImg src={'/static/img/icon-deploy-green.svg'} {...props} />;
export const IconAddFile = ({...props}) => <svg preserveAspectRatio="xMidYMid meet" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ verticalAlign: "middle" }}><polygon points="12,3 8,3 8,4 11,4 11,7 14,7 14,14 6,14 6,8 5,8 5,15 15,15 15,6"/><path d="M7 3.018h-2v-2.018h-1.981v2.018h-2.019v1.982h2.019v2h1.981v-2h2v-1.982z" {...props}/></svg>;
export const IconAddFolder = ({...props}) => <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ verticalAlign: "middle" }}><polygon points="9,3 8,5 8,2 6,2 6,0 2,0 2,2 0,2 0,6 2,6 2,8 2,15 16,15 16,3"/><path d="M14 4h-4.382l-1 2h-2.618v2h-3v6h12v-10h-1zm0 2h-3.882l.5-1h3.382v1z" fill="#fff"/><polygon points="7,3.018 5,3.018 5,1 3.019,1 3.019,3.018 1,3.018 1,5 3.019,5 3.019,7 5,7 5,5 7,5" fill="#fff"/><polygon points="14,5 14,6 10.118,6 10.618,5" {...props}/></svg>;
export const IconInformation = ({...props}) => <IconImg src={'/static/img/icon-information.svg'} {...props} />;
export const IconCheckCircle = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }} {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
export const IconRun = () => <FaIcon icon={iconRun} />;
export const IconSave = () => <FaIcon icon={iconSave} />;
export const IconCompile = () => <FaIcon icon={iconCompile} />;
export const IconDeploy = ({ ...props }) => (
    <IconImg src={'/static/img/icon-deploy.svg'} {...props} />
);
export const IconConfigure = ({ ...props }) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
export const IconInteract = ({ ...props }) => (
    <IconImg src={'/static/img/icon-interact.svg'} {...props} />
);
export const IconTrash = () => <FaIcon icon={iconTrash} />;
export const IconGem = () => <FaIcon icon={iconGem} />;
export const IconFile = () => <FaIcon icon={iconFile} />;
export const IconFileAlt = () => <FaIcon icon={iconFileAlt} />;
export const IconImportFile = () => <FaIcon icon={IconFileImport} />;
export const IconFolder = ({...props}) => <FaIcon icon={iconFolder} color="#49616C" {...props} />;
export const IconFolderOpen = ({...props}) => (
    <FaIcon icon={iconFolderOpen} color="#49616C" {...props} />
)

export const IconSuperblocks = ({ ...props }) => (
    <IconImg src={'/static/img/img-logo.svg'} {...props} />
);

export const IconAngleRight = ({ ...props }) => (
    <IconImg src={'/static/img/icon-arrow-right.svg'} {...props} />
);
export const IconAngleDown = ({ ...props }) => (
    <IconImg src={'/static/img/icon-arrow-down.svg'} {...props} />
);
export const IconCube = () => <FaIcon icon={iconCube} />;
export const IconPlus = () => <FaIcon icon={iconPlus} />;
export const IconUp = () => <FaIcon icon={iconUp} />;
export const IconDown = () => <FaIcon icon={iconDown} />;
export const IconRight = () => <FaIcon icon={iconRight} />;
export const IconClone = () => <FaIcon icon={iconClone} />;
export const IconDownload = ({ ...props }) => (
    <FaIcon icon={iconDownload} {...props} />
);
export const IconDropdown = ({ ...props }) => (
    <span className="dropDown" {...props} />
);
export const IconClose = ({ ...props }) => <svg preserveAspectRatio="xMidYMid meet" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/></svg>
export const IconAdd = ({ ...props }) => (
    <IconImg src={'/static/img/icon-add-contract.svg'} {...props} />
);
export const IconLock = ({ ...props }) => <FaIcon icon={iconLock} {...props} />;
export const IconLockOpen = ({ ...props }) => (
    <FaIcon icon={iconLockOpen} {...props} />
);
export const IconEdit = ({ ...props }) => (
    <FaIcon icon={iconPencil} {...props} />
);
export const IconMetamask = ({ ...props }) => (
    <IconImg src={'/static/img/icon-metamask-logo.svg'} {...props} />
);
export const IconMetamaskLocked = ({ ...props }) => (
    <IconImg src={'/static/img/icon-metamask-logo-locked.svg'} {...props} />
);
export const IconPublicAddress = ({ ...props }) => (
    <IconImg src={'/static/img/icon-public-address.svg'} {...props} />
);
export const IconMosaic = ({ ...props }) => (
    <FaIcon icon={iconMosaic} {...props} />
);
export const IconCopy = ({ ...props }) => (
    <FaIcon icon={iconCopy} {...props} />
);
export const IconBack= ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>
export const IconWarning = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "center" }} {...props}><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
export const IconCubeTransparent = ({...props}) => <svg width="14px" height="15px" viewBox="0 0 14 15" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white" {...props}>
    <path d="M7,5.55111512e-16 L0,3.75 L0,11.331875 L7,15 L14,11.331875 L14,3.790625 L7,5.55111512e-16 Z M12.0336364,4.15375 L7.00318182,6.79 L1.9972727,4.10625 L6.99681818,1.425625 L12.0336364,4.15375 Z M1.27272727,5.14375 L6.36363636,7.870625 L6.36363636,13.25 L1.27272727,10.5825 L1.27272727,5.14375 Z M7.63636364,13.25 L7.63636364,7.875 L12.7272727,5.206875 L12.7272727,10.581875 L7.63636364,13.25 Z" id="Shape"></path>
</svg>

// Top Bar
export const IconCollaborate = ({ ...props }) => (
    <IconImg src={'src="/static/img/icon-collaborate.png'} {...props} />
);
export const IconNew = ({ ...props }) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"/></svg>
export const IconProjectSelector = ({ ...props }) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z"/></svg>;
export const IconHelp = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"/><path d="M235 339h42v42h-42zM276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z"/></svg>;
export const IconCheck = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>
export const IconShare = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"/></svg>
export const IconUpload = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z"/></svg>;
export const IconFork = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M352 96c-38.6 0-70 31.4-70 70 0 33.4 23.7 61.9 55.9 68.5-1.2 19.1-10.3 29.3-27 42.2-20.4 15.7-46.7 20-65.3 23.4-40.7 7.4-62.9 27-72.5 40V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3v171.3c-14.5 3.2-27.8 11-37.7 22.3C96.2 376.7 90 393 90 410c0 38.6 31.4 70 70 70s70-31.4 70-70c0-23.4-11.6-44.9-30.7-57.9 8.6-9.7 24.5-19.6 51.1-24.4 21.6-3.9 52.6-9.6 77.4-28.8 23.6-18.2 36.7-36.5 38-64.3 32.3-6.5 56.1-35.1 56.1-68.6.1-38.6-31.3-70-69.9-70zm-234 6c0-23.2 18.8-42 42-42s42 18.8 42 42-18.8 42-42 42-42-18.8-42-42zm84 308c0 23.2-18.8 42-42 42s-42-18.8-42-42 18.8-42 42-42 42 18.8 42 42zm150-202c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"/></svg>
export const IconPreferences = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"/></svg>
export const IconLoader = ({...props}) => <svg width="16" height="16" viewBox="0 0 44 44" stroke="#fff" {...props}> <g fill="none" fillRule="evenodd" strokeWidth="2"> <circle cx="22" cy="22" r="1"> <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" /> <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" /> </circle> <circle cx="22" cy="22" r="1"> <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" /> <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" /></circle></g></svg>

// Panels
export const IconTransactions = ({ ...props }) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3zM123.1 404.3c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z"/></svg>
export const IconMenu = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="32px" width="20px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
export const IconCheckThin = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14px" width="14px" viewBox="0 0 512 512" style={{ verticalAlign: "center" }} {...props}><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg>
export const IconAlphabetA = ({ ...props }) => (
    <IconImg src={'/static/img/icon-alphabet-a.svg'} {...props} />
);

// File types
export const IconContract = ({...props}) => <IconImg src={'/static/img/icon-solidity.svg'} {...props} />;
export const IconHtml = ({...props}) => <IconImg src={'/static/img/icon-html.svg'} {...props} />;
export const IconJS = ({...props}) => <IconImg src={'/static/img/icon-js.svg'} {...props} />;
export const IconCss = ({...props}) => <IconImg src={'/static/img/icon-css.svg'} {...props} />;
export const IconMd = ({...props}) => <IconImg src={'/static/img/icon-md.svg'} {...props} />;
export const IconShowPreview = ({...props}) => <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16px" width="16px" viewBox="0 0 204.5 204.5" style={{ verticalAlign: "middle" }} {...props}><path d="M27,33 L173,33 C178.522847,33 183,37.4771525 183,43 L183,157 C183,162.522847 178.522847,167 173,167 L27,167 C21.4771525,167 17,162.522847 17,157 L17,43 C17,37.4771525 21.4771525,33 27,33 Z M29,64 L29,156 L171,156 L171,64 L29,64 Z M84.260356,82.6998802 L119.974518,107.161635 C121.797124,108.409995 122.262642,110.899505 121.014282,112.722111 C120.734924,113.129973 120.38238,113.482517 119.974518,113.761875 L84.260356,138.223629 C82.4377502,139.471989 79.9482404,139.006471 78.6998802,137.183866 C78.2439706,136.518238 78,135.730302 78,134.92351 L78,86 C78,83.790861 79.790861,82 82,82 C82.8067925,82 83.594728,82.2439706 84.260356,82.6998802 Z" id="Combined-Shape" fill="inherit"></path></svg>
export const IconJSON = ({...props}) => <IconImg src={'/static/img/icon-json.svg'} {...props} />;
export const IconBinary = ({...props}) => <IconImg src={'/static/img/icon-binary.svg'} width="17px" height="17px" {...props} />;

// Learn and Resouces
export const IconGuide = ({ ...props }) => (
    <IconImg src={'/static/img/icon-guide.svg'} {...props} />
);
export const IconVideoTutorials = ({ ...props }) => (
    <IconImg src={'/static/img/icon-video-tutorials.svg'} {...props} />
);
export const IconHelpCenter = ({ ...props }) => (
    <IconImg src={'/static/img/icon-help-center.svg'} {...props} />
);
export const IconAskQuestion = ({ ...props }) => (
    <IconImg src={'/static/img/icon-ask-question.svg'} {...props} />
);
export const IconWhatsNew = ({ ...props }) => (
    <IconImg src={'/static/img/icon-whats-new.svg'} {...props} />
);

// External services
export const IconTwitter = ({...props}) => <FaIcon icon={iconTwitter} {...props} />;
export const IconGithub = ({...props}) => <FaIcon icon={iconGithub} {...props} />;
export const IconDiscord = ({...props}) => <FaIcon icon={iconDiscord} {...props}/>;


// Preferences
export const IconChain = ({...props}) => <svg preserveAspectRatio="xMidYMid meet" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z"/></svg>;
export const IconAdvanced = ({...props}) => <svg preserveAspectRatio="xMidYMid meet" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M456.9 242.2l-26.1-4.2c-3.5-.6-6.1-3.3-6.6-6.8-.5-3.2-1-6.4-1.7-9.5-.7-3.4.9-6.9 3.9-8.6l23.1-12.8c3.6-1.8 5.3-6.1 3.9-9.9l-4-11c-1.4-3.8-5.4-6-9.4-5l-25.9 5c-3.4.7-6.9-1-8.6-4.1-1.5-2.8-3.1-5.6-4.8-8.4-1.8-3-1.6-6.8.7-9.5l17.3-19.9c2.8-3 2.9-7.5.3-10.6l-7.5-9c-2.6-3.1-7.1-3.8-10.5-1.5L378.3 130c-3 1.8-6.8 1.4-9.4-.9-2.4-2.1-4.9-4.2-7.4-6.2-2.7-2.2-3.8-5.9-2.5-9.1l9.4-24.7c1.6-3.7.2-8.1-3.3-10.1l-10.2-5.9c-3.5-2-8-1.1-10.4 2.2l-16.6 20.8c-2 2.5-4.9 3.8-8.5 2.5 0 0-5.6-2.3-9.8-3.7-3.3-1.1-5.6-4.2-5.5-7.7l.4-26.4c.2-4.1-2.6-7.7-6.6-8.4l-11.6-2c-4-.7-7.9 1.7-9.1 5.6l-8.6 25c-1.1 3.3-4.3 5.5-7.8 5.4-1.6 0-3.3-.1-4.9-.1s-3.3 0-4.9.1c-3.5.1-6.6-2.1-7.8-5.4l-8.6-25c-1.2-3.9-5.1-6.3-9.1-5.6l-11.6 2c-4 .7-6.8 4.3-6.6 8.4l.4 26.4c.1 3.5-2.1 6.4-5.5 7.7-2.3.9-7.3 2.8-9.7 3.7-2.8 1-6.1.2-8.8-2.9l-16.5-20.3c-2.4-3.3-6.9-4.2-10.4-2.2l-10.2 5.9c-3.5 2-5 6.4-3.3 10.1l9.4 24.7c1.2 3.3.2 7-2.5 9.1-2.5 2-5 4.1-7.4 6.2-2.6 2.3-6.4 2.7-9.4.9L111 116.3c-3.4-2.2-7.9-1.6-10.5 1.5l-7.5 9c-2.6 3.1-2.5 7.7.3 10.6l17.3 19.9c2.3 2.6 2.6 6.5.7 9.5-1.7 2.7-3.3 5.5-4.8 8.4-1.7 3.1-5.1 4.7-8.6 4.1l-25.9-5c-4-.9-8 1.2-9.4 5l-4 11c-1.4 3.8.3 8.1 3.9 9.9L85.6 213c3.1 1.7 4.6 5.2 3.9 8.6-.6 3.2-1.2 6.3-1.7 9.5-.5 3.5-3.2 6.2-6.6 6.8l-26.1 4.2c-4 .5-7.1 3.9-7.1 7.9v11.7c0 4.1 3 7.5 7.1 7.9l26.1 4.2c3.5.6 6.1 3.3 6.6 6.8.5 3.2 1 6.4 1.7 9.5.7 3.4-.9 6.9-3.9 8.6l-23.1 12.8c-3.6 1.8-5.3 6.1-3.9 9.9l4 11c1.4 3.8 5.4 6 9.4 5l25.9-5c3.4-.7 6.9 1 8.6 4.1 1.5 2.8 3.1 5.6 4.8 8.4 1.8 3 1.6 6.8-.7 9.5l-17.3 19.9c-2.8 3-2.9 7.5-.3 10.6l7.5 9c2.6 3.1 7.1 3.8 10.5 1.5l22.7-13.6c3-1.8 6.8-1.4 9.4.9 2.4 2.1 4.9 4.2 7.4 6.2 2.7 2.2 3.8 5.9 2.5 9.1l-9.4 24.7c-1.6 3.7-.2 8.1 3.3 10.1l10.2 5.9c3.5 2 8 1.1 10.4-2.2l16.8-20.6c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.6 3.3 1.1 5.6 4.2 5.5 7.7l-.4 26.4c-.2 4.1 2.6 7.7 6.6 8.4l11.6 2c4 .7 7.9-1.7 9.1-5.6l8.6-25c1.1-3.3 4.3-5.5 7.8-5.4 1.6 0 3.3.1 4.9.1s3.3 0 4.9-.1c3.5-.1 6.6 2.1 7.8 5.4l8.6 25c1.2 3.9 5.1 6.3 9.1 5.6l11.6-2c4-.7 6.8-4.3 6.6-8.4l-.4-26.4c-.1-3.5 2.2-6.6 5.5-7.7 4.2-1.4 7-2.5 9.6-3.5 2.6-.9 5.8-1 8.3 2.1l17 20.9c2.4 3.3 6.9 4.2 10.4 2.2l10.2-5.9c3.5-2 5-6.4 3.3-10.1l-9.4-24.7c-1.2-3.3-.2-7 2.5-9.1 2.5-2 5-4.1 7.4-6.2 2.6-2.3 6.4-2.7 9.4-.9l22.7 13.6c3.4 2.2 7.9 1.6 10.5-1.5l7.5-9c2.6-3.1 2.5-7.7-.3-10.6l-17.3-19.9c-2.3-2.6-2.6-6.5-.7-9.5 1.7-2.7 3.3-5.5 4.8-8.4 1.7-3.1 5.1-4.7 8.6-4.1l25.9 5c4 .9 8-1.2 9.4-5l4-11c1.4-3.8-.3-8.1-3.9-9.9l-23.1-12.8c-3.1-1.7-4.6-5.2-3.9-8.6.6-3.2 1.2-6.3 1.7-9.5.5-3.5 3.2-6.2 6.6-6.8l26.1-4.2c4-.5 7.1-3.9 7.1-7.9v-11.7c-.2-3.8-3.2-7.3-7.3-7.7zM181.8 356.9c-5.2 9-17.4 10.7-25 3.6C129.2 334.2 112 297.1 112 256c0-40.9 17.1-77.9 44.5-104.1 7.5-7.2 19.8-5.5 25 3.5l56 96.6c1.4 2.5 1.4 5.5 0 8l-55.7 96.9zM396 289.7C380.9 353 323.9 400 256 400c-14.1 0-27.8-2-40.6-5.8-9.9-2.9-14.5-14.4-9.3-23.3l55.7-96.9c1.4-2.5 4.1-4 6.9-4h111.7c10.4 0 18 9.6 15.6 19.7zM380.5 242H268.7c-2.9 0-5.5-1.5-6.9-4l-56.1-96.7c-5.2-8.9-.7-20.4 9.2-23.4 13-3.9 26.8-5.9 41.1-5.9 67.9 0 124.9 47 140 110.3 2.4 10.1-5.2 19.7-15.5 19.7z"/></svg>


// App Preview
export const IconDownloadDApp = ({...props}) => <svg preserveAspectRatio="xMidYMid meet" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="28px" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }} {...props}><path d="M332 142.7c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7L310 155.9c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l95.8 91.5-95.8 91.5c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l13.8 13.2c1.2 1.1 2.6 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l114.2-109c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L332 142.7zM106.3 256l95.8-91.5c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3l-13.8-13.2c-1.2-1.1-2.7-1.7-4.1-1.7s-3 .6-4.1 1.7l-114.2 109c-1.2 1.1-1.9 2.7-1.9 4.3 0 1.6.7 3.2 1.9 4.3l114.2 109c1.2 1.1 2.7 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l13.8-13.2c1.2-1.1 1.9-2.7 1.9-4.3 0-1.6-.7-3.2-1.9-4.3L106.3 256z"/><path d="M332.8 267.2c.1-3.9-1.4-7.6-4.2-10.4l-.1-.1c-2.7-2.7-6.2-4.2-10-4.2-3.5 0-6.8 1.3-9.4 3.6l-38.9 34.6V184.6c0-7.8-6.4-14.2-14.2-14.2-7.8 0-14.2 6.4-14.2 14.2v106.2l-38.9-34.6c-2.6-2.3-6-3.6-9.4-3.6-3.8 0-7.4 1.5-10.1 4.2l-.1.1c-2.8 2.8-4.2 6.4-4.2 10.4.1 3.9 1.7 7.5 4.6 10.2l62.8 57.7c2.6 2.4 6 3.7 9.5 3.7s6.9-1.3 9.5-3.7l62.8-57.7c2.8-2.8 4.5-6.4 4.5-10.3z"/></svg>;

// Refresh
export const IconRefresh = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" fill="currentColor" height="18px" width="18px" style={{ verticalAlign: "middle" }} {...props}><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"/></svg>;

// Open new window
export const IconOpenWindow = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" fill="currentColor" height="18px" width="18px" style={{ verticalAlign: "middle" }} {...props}><path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"/></svg>;

export const IconMore = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="18px" width="18px" style={{ verticalAlign: "middle" }} {...props}><path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"/></svg>;

// Dashboard
export const IconRecent = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" fill="currentColor" height="18px" width="18px" style={{ verticalAlign: "middle" }} {...props}><g fillOpacity=".9"><path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z"/><path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z"/></g></svg>;
export const IconDots = ({...props}) => <svg {...props} fill="currentColor" width="7px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" style={{ verticalAlign: "middle" }}><path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>;
export const IconArrowUpThin = ({...props}) => <svg {...props} fill="currentColor" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }}><path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"/></svg>
export const IconChevronLeft = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6"></polyline></svg>
export const IconChevronDown = ({...props}) => <svg {...props} width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
export const IconPlusTransparent = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="8" y1="0" x2="8" y2="16"></line><line x1="0" y1="8" x2="16" y2="8"></line></svg>
export const IconPlay = ({...props}) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
export const IconExternalLink = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }} {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
export const IconClock = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }} {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
export const IconWatch = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }} {...props}><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
export const IconBranch = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 512 512" fill="currentColor" style={{ verticalAlign: "middle" }} {...props}><path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/></svg>
export const IconCommit = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 512 512" fill="currentColor" style={{ verticalAlign: "middle" }} {...props}><path d="M480 224h-99.8c-14.2-55.2-64.2-96-123.7-96S147 168.8 132.8 224H32v64h100.8c14.2 55.2 64.2 96 123.7 96s109.5-40.8 123.7-96H480v-64zM256.5 336c-44 0-79.8-35.9-79.8-80s35.8-80 79.8-80 79.8 35.9 79.8 80-35.8 80-79.8 80z"/></svg>
export const IconCalendar = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 512 512" fill="currentColor" style={{ verticalAlign: "middle" }} {...props}><path d="M368.005 272h-96v96h96v-96zm-32-208v32h-160V64h-48v32h-24.01c-22.002 0-40 17.998-40 40v272c0 22.002 17.998 40 40 40h304.01c22.002 0 40-17.998 40-40V136c0-22.002-17.998-40-40-40h-24V64h-48zm72 344h-304.01V196h304.01v212z"/></svg>
export const IconFilter = ({...props}) => <svg {...props} width="14px" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
export const IconUsers = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
export const IconArchive = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
export const IconRunning = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
export const IconProfile = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" {...props}></path><circle cx="12" cy="7" r="4"></circle></svg>
export const IconAppearance = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 961 961" stroke="currentColor" strokeWidth="20" fill="none" {...props}><path d="M453,959.2 C333.8,951.6 228.1,904.9 144.2,822.8 C68,748.3 19.5,653.3 4.6,549.1 C0.8,523 -3.26821903e-14,510.7 0.1,479.3 C0.1,435 3.9,403.3 14,362.8 C22.9,327.7 32.1,302.6 49,268.3 C67.5,230.7 85.4,203.1 112.6,170.3 C124.4,156 158.7,122.2 174.2,109.5 C245.3,51.4 328.1,15.5 418.2,3.8 C449.4,-0.3 487.2,-1.2 498,1.8 C516.2,6.9 530.8,16.1 541.4,29.3 C554.4,45.4 560.5,64.3 559.1,84.8 C557.9,104.5 552.3,117.3 537.2,135.3 C530.5,143.3 523.5,156.9 520.9,167.3 C518.4,176.9 518.4,195.8 520.9,205.3 C527.2,229.6 543.4,249 565.8,259.3 C580.7,266.1 579.9,266 654.5,266.8 C691.6,267.2 723.1,267.8 724.5,268.1 C725.9,268.5 731.5,269.4 737,270.3 C790.6,278.7 842,305.4 881.7,345.5 C914.1,378.2 935.6,414.3 948.9,458.8 C959.7,494.8 962.2,539.8 955.9,585.3 C937.3,718.8 849.3,836.5 718,903.3 C659.8,932.9 599.5,950.4 531.5,957.3 C516.8,958.8 466.1,960 453,959.2 Z M369,849.8 C396.2,841.2 416.4,820.2 423.7,793 C426.5,782.1 426.5,764.3 423.6,753.3 C416.2,725.2 394.1,703.1 366,695.7 C354.6,692.7 338,692.7 326.6,695.7 C298.9,703 278.2,722.8 269.5,750.3 C266.7,759.3 265.7,777 267.5,787.1 C272.9,818.4 297.6,844.1 328.9,851.3 C338.3,853.5 360.1,852.7 369,849.8 Z M629.3,851.3 C660.8,844.7 686,818.8 691.5,787.1 C693.3,777 692.3,759.3 689.5,750.3 C680.8,722.8 660.1,703 632.4,695.7 C621,692.7 604.4,692.7 593,695.7 C564.9,703.1 542.8,725.2 535.4,753.3 C532.4,764.5 532.4,782.2 535.4,793.2 C543.3,822.9 567.7,845.9 597.6,851.7 C604.7,853.1 621.8,852.9 629.3,851.3 Z M198.5,638.7 C216.2,635.9 229.8,628.7 243,615.4 C256.3,602 263,588.2 265.5,569 C268.7,544.5 259.4,519.4 240.8,501.7 C231,492.3 220.7,486.6 206.8,482.6 C196.6,479.7 176.4,479.5 166.5,482.2 C130.3,492.1 106.5,523 106.5,559.7 C106.5,576.2 110.7,590.8 119.2,603.6 C136.7,629.9 167.8,643.7 198.5,638.7 Z M794.3,636.8 C829.1,627 852.5,596 852.5,559.8 C852.5,543.3 848.6,530.1 839.9,516.5 C814.9,477.8 762.9,468.2 725.3,495.5 C713.1,504.3 701.5,520.5 696.7,535.4 C687.9,562.5 694.7,593.1 714.2,613.9 C726.5,626.9 741.3,635.2 758,638.4 C767.6,640.3 784.9,639.5 794.3,636.8 Z" id="Shape"></path></svg>
