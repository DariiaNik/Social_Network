import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebar:sidebarReducer,
    findUsers:findUsersReducer,
    auth:authReducer
});

let store = createStore(reducers);


export default store;