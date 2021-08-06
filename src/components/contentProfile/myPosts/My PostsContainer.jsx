import React from 'react'
import {addPostActionCreator, likeActionCreator} from "../../../redux/profileReducer";
import My_Posts from "./My Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            dispatch(addPostActionCreator(text));
        },
        like: (id) => {
            dispatch(likeActionCreator(id));
        }
    }

}

const My_Posts_Container = connect(mapStateToProps, mapDispatchToProps)(My_Posts);


export default My_Posts_Container;