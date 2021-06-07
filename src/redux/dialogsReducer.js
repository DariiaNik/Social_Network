import profileReducer from "./profileReducer";

const NEW_MESSAGE = 'NEW-POST';

let initialState = {
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
}

 const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            if (action.message !== '') {
                let newMessage = {
                    id: state.messages[state.messages.length-1].id + 1,
                    message: action.message
                }
                return  {
                    ...state,
                    messages:[...state.messages,newMessage]
                };
            }
            break;
        default:
            return state;
    }
    return state;

}
export const newMessageActonCreate = (message) => ({type: NEW_MESSAGE, message: message})

export default dialogsReducer;