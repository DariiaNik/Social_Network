
let initialState = {
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

const sidebarReducer = (state = initialState,action) => {

    return state;

}

export default sidebarReducer;