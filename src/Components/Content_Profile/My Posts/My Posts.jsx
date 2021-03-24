import React from 'react'
import './My Posts.scss'
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profileReducer";


const My_Posts = (props) => {

    let postElement = props.posts.map(post => (
        <Post message={post.text} likes={post.likes} id={post.id} dispatch={props.dispatch}/>));

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));
        newPostElement.current.value = '';
    }

    return (
        <div className={'myPosts'}>
            <h3>My posts</h3>
            <div>
                <div className={'add_post'}>
                    <textarea className={'area_add_post'}
                              rows={'5'} cols={'119'}
                              placeholder={'Write new post '}
                              ref={newPostElement}
                    />
                    <button onClick={addPost} className={'button_add_post'}> Add post</button>
                </div>
                {postElement}
            </div>
        </div>
    )
}


export default My_Posts