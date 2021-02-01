import React from 'react'
import './Navigation.scss'
import {NavLink} from "react-router-dom";

const Navigation = () =>{
    return(
        <nav className={'navigation'}>
            <div className={'navigation_item'}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={'navigation_item'}>
                <NavLink to={'/dialogs'}>Message</NavLink>
            </div>
            <div className={'navigation_item'}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={'navigation_item'}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={'navigation_item'}>
                <NavLink to={'/setting'}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation