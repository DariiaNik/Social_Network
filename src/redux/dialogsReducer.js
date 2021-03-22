import profileReducer from "./profileReducer";

const NEW_MESSAGE = 'NEW-POST';

 const dialogsReducer = (state,action) => {

    switch (action.type) {
        case NEW_MESSAGE:
            if (action.message !== '') {
                let newMessage = {
                    id: state.messages[state.messages.length-1].id + 1,
                    message: action.message
                }
                state.messages.push(newMessage);
            }
            break;
        default:
            return this.state;
    }
    return state;

}
export default dialogsReducer;