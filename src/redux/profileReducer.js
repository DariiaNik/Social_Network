const ADD_POST = 'ADD-POST';
const COUNT_LIKES = 'COUNT-LIKES';

let initialState = {
    posts: [
        {id: 2, text: 'HI,how are you?', likes: 125},
        {id: 1, text: 'It\'s my first post', likes: 54},
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.text !== '') {
                let newPost = {
                    id: state.posts[0].id + 1,
                    text: action.text,
                    likes: 0
                }
                state.posts.unshift(newPost);
            }
            break;
        case COUNT_LIKES:
            for (let i = 0; i < state.posts.length; i++) {
                let stateId = state.posts[i].id;
                if (action.outId === stateId) {
                    state.posts[i].likes = (state.posts[i].likes + 1)
                }
            }
            break;
        default:
            return state;
    }
    return state;

}
export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})
export const likeActionCreator = (id) => ({type: COUNT_LIKES, outId: id})

export default profileReducer;