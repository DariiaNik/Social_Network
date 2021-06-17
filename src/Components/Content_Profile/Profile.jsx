import React from 'react'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_Posts_Container from "./My Posts/My PostsContainer";
import {Redirect} from "react-router";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <My_Posts_Container  />
        </div>
    )
}

export default Profile