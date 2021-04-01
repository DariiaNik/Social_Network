import React from 'react';
import {newMessageActonCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let newMessageElement = (message) => {
                    store.dispatch(newMessageActonCreate(message));

                }
                return (<Dialogs newMessageElement={newMessageElement}
                             dialogs={state.messagesPage.dialogs}
                             messages={state.messagesPage.messages}/>)
            }
        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;