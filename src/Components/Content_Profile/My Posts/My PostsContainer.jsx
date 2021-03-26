import React from 'react'
import {addPostActionCreator, likeActionCreator} from "../../../redux/profileReducer";
import My_Posts from "./My Posts";


const My_Posts_Container = (props) => {

    let state = props.store.getState();

    let addPost_container = (text) => {
        props.store.dispatch(addPostActionCreator(text));

    }
    let like = (id) => {
        props.store.dispatch(likeActionCreator(id));
    }

    return (< My_Posts addNewPost={addPost_container}
                       posts={state.profilePage.posts}
                       like={like}/>)
}


export default My_Posts_Container;