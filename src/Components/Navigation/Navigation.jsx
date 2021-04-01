import React from 'react'
import './Navigation.scss'
import {NavLink} from "react-router-dom";
import Friend from "./NavFriend/Friend";
import StoreContext from "../../StoreContext";


const Navigation = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let FriendElem =
                    state.sidebar.friends.map(friend => (
                        <Friend name={friend.name} photo={friend.photo} id={friend.id}/>))

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
                        <div className={'navigation_Friends'}>
                            <div className={'friend_title'}>Friends</div>
                            {FriendElem}
                        </div>
                    </nav>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default Navigation