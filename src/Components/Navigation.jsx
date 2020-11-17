import React from 'react'
import './Navigation.css'

const Navigation = () =>{
    return(
        <nav className={'navigation'}>
            <div className={'navigation_item'}>
                <a>Profile</a>
            </div>
            <div className={'navigation_item'}>
                <a>Message</a>
            </div>
            <div className={'navigation_item'}>
                <a>News</a>
            </div>
            <div className={'navigation_item'}>
                <a>Music</a>
            </div>
            <div className={'navigation_item'}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation