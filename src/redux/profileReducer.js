const ADD_POST = 'ADD-POST';
const COUNT_LIKES = 'COUNT-LIKES';

const profileReducer = (state, action) => {
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
            return this.state;
    }
    return state;

}

export default profileReducer;