import React from 'react'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_Posts_Container from "./My Posts/My PostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <My_Posts_Container  />
        </div>
    )
}

export default Profile