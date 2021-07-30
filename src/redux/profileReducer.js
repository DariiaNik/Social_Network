import {act} from "@testing-library/react";
import {profileAPI, userAPI} from "../api/userAPI";
import {followingProgressToggle, followToggle} from "./findUsersReducer";

const ADD_POST = 'ADD-POST';
const COUNT_LIKES = 'COUNT-LIKES';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USERS_STATUS = 'SET_USERS_STATUS';

let initialState = {
    posts: [
        {id: 2, text: 'HI,how are you?', likes: 125},
        {id: 1, text: 'It\'s my first post', likes: 54},
    ],
    profile: null,
    status: 'Hello',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            if (action.text !== '') {
                let newPost = {
                    id: state.posts[0].id + 1,
                    text: action.text,
                    likes: 0
                }
                return {
                    ...state,
                    posts: [newPost, ...state.posts]
                }
            }
            break;
        }
        case COUNT_LIKES: {
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            for (let i = 0; i < state.posts.length; i++) {
                let stateId = state.posts[i].id;
                if (action.outId === stateId) {
                    stateCopy.posts[i].likes = (stateCopy.posts[i].likes + 1)
                }
            }
            return stateCopy;
        }
        case SET_USERS_PROFILE : {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_USERS_STATUS : {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const likeActionCreator = (id) => ({type: COUNT_LIKES, outId: id})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USERS_STATUS, status})


export const getProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUsersProfile(response.data));
        })
    }
}

export const getUserStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        })
    }
}
export const updateUserStatusTC = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            dispatch(setUserStatus(status));
        })

}


export default profileReducer;