import React from 'react';
import {newMessageActonCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let newMessageElement = (message) => {
        props.store.dispatch(newMessageActonCreate(message));

    }
    return (
        <Dialogs newMessageElement={newMessageElement}
                 dialogs={state.messagesPage.dialogs}
                 messages={state.messagesPage.messages}/>
    )
}

export default DialogsContainer;