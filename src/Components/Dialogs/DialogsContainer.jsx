import React from 'react';
import {newMessageActonCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageElement : (message) =>{
            dispatch(newMessageActonCreate(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;