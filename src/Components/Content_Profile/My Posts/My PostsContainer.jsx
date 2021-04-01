import React from 'react'
import {addPostActionCreator, likeActionCreator} from "../../../redux/profileReducer";
import My_Posts from "./My Posts";
import StoreContext from "../../../StoreContext";


const My_Posts_Container = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost_container = (text) => {
                    store.dispatch(addPostActionCreator(text));

                }
                let like = (id) => {
                    store.dispatch(likeActionCreator(id));
                }
                return (< My_Posts addNewPost={addPost_container}
                                   posts={state.profilePage.posts}
                                   like={like}/>)
            }
        }
        </StoreContext.Consumer>
    )
}


export default My_Posts_Container;