import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    return(
        <header className={'header'}>
            <img className={'header_logo'}
                 src='https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-heart-logo-minimalism-by-vexels.png'/>
            <div className={'loginBlock'}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header