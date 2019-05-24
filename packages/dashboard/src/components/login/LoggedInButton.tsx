import react, {Component} from 'react';

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

import React from 'react';
import classNames from 'classnames';
import style from './style.less';
import { IconChevronDown } from '../common/icons';
import OnlyIf from '../common/onlyIf';
import { MenuItem } from '../common';
import { DropdownContainer } from '../common/dropdown';
import { IUser } from '../../models';

interface IProps {
    logout: () => void;
    userProfile: IUser;
}

export default class LoggedInButton extends Component<IProps> {

    logout = () => {
        this.props.logout();
    }

    render() {
        const { userProfile } = this.props;
        return (
            <div className={classNames([style.action, style.loggedIn])}>
                <DropdownContainer
                        className={style.actionMenu}
                        dropdownContent={
                            <div className={style.menuDialog} >
                                <MenuItem linkTo={'/settings/profile'} title='Account Settings' />
                                <MenuItem linkTo={'/settings/appearance'} title='Change theme' />
                                <MenuItem onClick={this.logout} title='Logout' />
                            </div>
                        }>
                        <button className={classNames([style.actionMenu, style.container, 'btnNoBg'])}>
                            <OnlyIf test={userProfile}>
                                <img className={style.profilePicture} src={`${this.props.userProfile.imageUrl}&s=44`} />
                            </OnlyIf>
                            <div className={style.caret} >
                                <IconChevronDown className={style.angleDown}/>
                            </div>
                        </button>
                </DropdownContainer>
            </div>
        );
    }
}
