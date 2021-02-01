import React from 'react';
import './Dialog.scss'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={'dialog'}>
            <div className={'dialogPhoto'}>
                <img className={'photo'} src={props.photo}/>
            </div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;