import {authAPI} from "../api/userAPI";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }


}
export const setUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const authTC = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserDataAC(id, email, login))
            }
        })

}

export default authReducer;