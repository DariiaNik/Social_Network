import React from 'react'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_Posts_Container from "./My Posts/My PostsContainer";




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <My_Posts_Container store={props.store} />
        </div>
    )
}

export default Profile