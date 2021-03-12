import React from 'react';
import './Friend.scss';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={'friend'}>
            <div className={'friend_photo'}>
                <NavLink to={'/dialogs/' + props.id}><img className={'photo'} src={props.photo}/></NavLink>
            </div>
            <div className={'friend_name'}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
        )
}

export default Friend;