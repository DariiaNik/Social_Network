import {userAPI} from "../api/userAPI";

const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let SET_CURRENT_PAGE_TO_LEFT = 'SET_CURRENT_PAGE_TO_LEFT';
let SET_CURRENT_PAGE_TO_RIGHT = 'SET_CURRENT_PAGE_TO_RIGHT';
let FETCHING_TOGGLE = 'FETCHING_TOGGLE';
let FOLLOWING_PROGRESS_TOGGLE = 'FOLLOWING_PROGRESS_TOGGLE';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}


const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        }
        case SET_USERS : {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.count}
        }
        case SET_CURRENT_PAGE_TO_LEFT : {
            if (action.currentPage > 1) {
                return {...state, currentPage: action.currentPage - 1}
            } else {
                return {...state};
            }
        }
        case SET_CURRENT_PAGE_TO_RIGHT : {
            if (action.currentPage < state.totalUsersCount / state.pageSize) {
                return {...state, currentPage: action.currentPage + 1}
            } else {
                return {...state};
            }
        }
        case FETCHING_TOGGLE : {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOWING_PROGRESS_TOGGLE : {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}

export const followToggle = (userId) => ({type: FOLLOW_TOGGLE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setCurrentPageToLeft = (currentPage) => ({type: SET_CURRENT_PAGE_TO_LEFT, currentPage})
export const setCurrentPageToRight = (currentPage) => ({type: SET_CURRENT_PAGE_TO_RIGHT, currentPage})
export const toggleIsFetching = (isFetching) => ({type: FETCHING_TOGGLE, isFetching})
export const followingProgressToggle = (isFetching, userId) => ({type: FOLLOWING_PROGRESS_TOGGLE, isFetching, userId})


export const findUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        userAPI.getUsersAPI(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const onPageChanged = (pageNumber, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber))

        userAPI.getUsersAPI(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const followPost = (userId) => {

    return (dispatch) => {

        dispatch(followingProgressToggle(true, userId));

        userAPI.followPostAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId))
            }
            dispatch(followingProgressToggle(false, userId));
        })
    }
}
export const followDelete = (userId) => {

    return (dispatch) => {

        dispatch(followingProgressToggle(true, userId));

        userAPI.followDeleteAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId))
            }
            dispatch(followingProgressToggle(false, userId));
        })
    }
}


export default findUsersReducer;