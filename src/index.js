import store from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={state} addPost={store.addPost.bind(store)}  countLikes = {store.countLikes.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





