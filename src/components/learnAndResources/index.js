import React, { Component } from 'react';
import classNames from 'classnames';
import style from './style.less';
import Caret from '../caret';
import {
    IconGuide,
    IconVideoTutorials,
    IconHelpCenter,
    IconAskQuestion,
} from '../icons';

const LinkItem = ({ icon, title, link }) => (
    <a
        href={link}
        className={classNames([style.link, style.item])}
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className={style.icon}>{icon}</div>
        <div className={style.title}>{title}</div>
    </a>
);

export default class LearnAndResources extends Component {
    state = {
        expanded: true && window.innerWidth > 1000,
    };

    toogle = () => {
        this.setState({
            expanded: !this.state.expanded,
        });
    };

    render() {
        const { ...props } = this.props;
        const { expanded } = this.state;
        return (
            <div {...props}>
                <div
                    onClick={this.toogle}
                    className={classNames([style.header, style.item])}
                    onContextMenu={(e)=>{e.preventDefault()}}
                >
                    <Caret expanded={expanded} />
                    Learning And Resources
                </div>
                {expanded ? (
                    <div className={style.listContainer}>
                        <ul>
                            <li>
                                <LinkItem
                                    icon={<IconGuide />}
                                    title={'Guide to Superblocks Lab'}
                                    link={
                                        'https://help.superblocks.com/hc/en-us/categories/360000486714-Using-Superblocks-Lab'
                                    }
                                />
                                <LinkItem
                                    icon={<IconVideoTutorials />}
                                    title={'Video tutorials'}
                                    link={
                                        'https://www.youtube.com/playlist?list=PLjnjthhtIABuzW2MTsPGkihZtvvepy-n4'
                                    }
                                />
                                <LinkItem
                                    icon={<IconHelpCenter />}
                                    title={'Help Center'}
                                    link={'https://help.superblocks.com/'}
                                />
                                <LinkItem
                                    icon={<IconAskQuestion />}
                                    title={'Ask a question'}
                                    link={
                                        'https://help.superblocks.com/hc/en-us/requests/new'
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        );
    }
}
