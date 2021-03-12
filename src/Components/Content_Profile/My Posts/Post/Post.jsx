import React from 'react'
import './Post.scss'
import Like from './Icons/icons8-heart.svg'


const Post = (props) => {

    let like = () => {
        let id = props.id
        props.countLikes(id)
    }

    return (
        <div className={'post'}>
            <div className={'post_item'}>
                <img className={'item_img'}
                     src={'https://iso.500px.com/wp-content/uploads/2016/08/stock-photo-150151767.jpg'}/>
                <div className={'item_text'}>
                    {props.message}
                </div>
            </div>
            <div className={'post_likes'}>
                <img className={'button_like'} src={Like} onClick={like}/>
                {props.likes}
            </div>
        </div>
    )
}

export default Post