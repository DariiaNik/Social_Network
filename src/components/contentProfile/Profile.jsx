import React from 'react'
import ProfileInfo from "./profileInfo/ProfileInfo";
import My_Posts_Container from "./myPosts/My PostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatusTC={props.updateUserStatusTC}/>
            <My_Posts_Container/>
        </div>
    )
}

export default Profile