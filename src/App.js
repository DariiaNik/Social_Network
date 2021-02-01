import './App.scss';
import React from 'react'
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Content_Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route,BrowserRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import {addPost} from "./redux/State";



const App = (props) => {
    return (
        <BrowserRouter>
        <div className={'wrapper'}>
            <Header/>
            <Navigation/>
            <div className={'wrapper_content'}>
                <Route path='/profile' render={()=> <Profile state = {props.appState.profilePage} addPost = {props.addPost} />}/>
                <Route path='/dialogs' render={()=> <Dialogs state = {props.appState.messagesPage}  /> }/>
                <Route path='/news' render={()=> <News/> }/>
                <Route path='/music' render={()=> <Music/> }/>
                <Route path='/setting' render={()=> <Setting/> }/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;
