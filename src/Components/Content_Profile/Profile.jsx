import React from 'react'
import './Profile.scss'
import My_Posts from "./My Posts/My Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <My_Posts posts = {props.state.posts} addPost = {props.addPost} countLikes={props.countLikes} />
        </div>
    )
}

export default Profile