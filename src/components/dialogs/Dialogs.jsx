import React from 'react';
import './Dialogs.scss';
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogsElement =
        props.dialogs.map(dialog => (<Dialog key={dialog.id} name={dialog.name} id={dialog.id} photo={dialog.photo}/>))

    let messageElement =
        props.messages.map(message => <Message key={message.id} message={message.message}/>)

    let addMessage = React.createRef();

    let newMessageElement = () => {
        let message = addMessage.current.value;
        props.newMessageElement(message);
        addMessage.current.value = '';
    }


    return (
        <div>
            <div className={'title'}>Dialogs</div>
            <div className={'dialogs'}>
                <div className={'dialogs_list'}>
                    {dialogsElement}
                </div>
                <div className={'dialogs_messages'}>
                    {messageElement}
                    <div className={'add_message'}>
                    <textarea className={'area_add_message'}
                              rows={'5'}
                              placeholder={'Write new message '}
                              ref={addMessage}
                    />
                        <button onClick={newMessageElement} className={'button_send_message'}> Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;