import React from 'react'
import profileReducer from "./profileReducer";
import {act} from "@testing-library/react";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD-POST';
const COUNT_LIKES = 'COUNT-LIKES';
const NEW_MESSAGE = 'NEW-POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 2, text: 'HI,how are you?', likes: 125},
                {id: 1, text: 'It\'s my first post', likes: 54},
            ]
        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dasha',
                    photo: 'https://s3.amazonaws.com/www-inside-design/uploads/2019/07/minimalismfeature.jpg'
                },
                {
                    id: 2,
                    name: 'Kostya',
                    photo: 'https://i.pinimg.com/originals/d3/b7/e4/d3b7e4bb7938799eb09e7404f70ccbf4.jpg'
                },
                {
                    id: 3,
                    name: 'Tanya',
                    photo: 'https://i.pinimg.com/originals/8a/bc/6e/8abc6e5a00499ac7f55ba87ad66b9286.jpg'
                },
                {
                    id: 4,
                    name: 'Irina',
                    photo: 'https://images.pexels.com/photos/912410/pexels-photo-912410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    id: 5,
                    name: 'Ihor',
                    photo: 'https://images.wallpaperscraft.com/image/lamp_electricity_minimalism_128251_3840x2400.jpg'
                },
                {
                    id: 6,
                    name: 'Mary',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WkXrGYcZGjzNtds55Mq4rEOd5TJfNckRFltJPYaER3qOZpJvfo6lYbVcj_7ukyvSf7N9gGz-_XEe2v-CMuVGQP4BSBADfyR0IQ&usqp=CAU&ec=45732301'
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Have a good day'}
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 2,
                    name: 'Kostya',
                    photo: 'https://i.pinimg.com/originals/d3/b7/e4/d3b7e4bb7938799eb09e7404f70ccbf4.jpg'
                },
                {
                    id: 3,
                    name: 'Tanya',
                    photo: 'https://i.pinimg.com/originals/8a/bc/6e/8abc6e5a00499ac7f55ba87ad66b9286.jpg'
                },
                {
                    id: 1,
                    name: 'Dasha',
                    photo: 'https://s3.amazonaws.com/www-inside-design/uploads/2019/07/minimalismfeature.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
    },
    // _addPost(text) {
    //     if (text !== '') {
    //         let newPost = {
    //             id: this._state.profilePage.posts[0].id + 1,
    //             text: text,
    //             likes: 0
    //         }
    //         this._state.profilePage.posts.unshift(newPost);
    //         this._callSubscriber(this._state);
    //     }
    // },
    // _countLikes(outId) {
    //     for (let i = 0; i < this._state.profilePage.posts.length; i++) {
    //         let stateId = this._state.profilePage.posts[i].id;
    //         if (outId === stateId) {
    //             this._state.profilePage.posts[i].likes = (this._state.profilePage.posts[i].likes + 1)
    //             this._callSubscriber(this._state);
    //             return;
    //         }
    //     }
    // },
    // _newMessage(message){
    //     if (message !== '') {
    //         let newMessage = {
    //             id: this._state.messagesPage.messages[this._state.messagesPage.messages.length-1].id + 1,
    //             message: message
    //         }
    //         this._state.messagesPage.messages.push(newMessage);
    //         this._callSubscriber(this._state);
    //     }
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        // switch (action.type) {
        //     case ADD_POST:
        //         this._addPost(action.text);
        //         break;
        //     case COUNT_LIKES:
        //         this._countLikes(action.outId);
        //         break;
        //     case NEW_MESSAGE:
        //         this._newMessage(action.message);
        //         break;
        // }
    }
}

export const  addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const  likeActionCreator = (id) => ({type: COUNT_LIKES,outId:id})
export const  newMessageActonCreate = (message) => ({type:NEW_MESSAGE,message:message})
export default store;
