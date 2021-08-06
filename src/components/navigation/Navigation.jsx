import React from 'react'
import './Navigation.scss'
import {NavLink} from "react-router-dom";
import Friend from "./NavFriend/Friend";


const Navigation = (props) => {

    let FriendElem =
        props.friends.map(friend => (
            <Friend key={friend.id} name={friend.name} photo={friend.photo} id={friend.id}/>))

    return (
        <nav className={'sidebar'}>
            <div className={'navigation'}>
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
            </div>
            <div className={'navigation_Find_Users'}>
                <NavLink className={'find_users'} to={'/findUsers'}>Find Users</NavLink>
            </div>
            <div className={'navigation_Friends'}>

                <div className={'friend_title'}>Friends</div>
                {FriendElem}
            </div>
        </nav>
    )
}

export default Navigation;