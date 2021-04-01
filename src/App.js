import './App.scss';
import React from 'react'
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Content_Profile/Profile";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <Navigation />
            <div className={'wrapper_content'}>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    );
}
export default App;
