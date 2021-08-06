import React from 'react';
import './Dialog.scss'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={'dialog'}>
            <div className={'dialogPhoto'}>
                <NavLink to={'/dialogs/' + props.id}><img className={'photo'} src={props.photo}
                                                          alt={'photo'}/></NavLink>
            </div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;