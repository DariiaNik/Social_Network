import './App.scss';
import React from 'react'
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavigationContainer from "./components/navigation/NavigationContainer";
import FindUsersContainer from "./components/findUsers/FindUsersContainer";
import ProfileContainer from "./components/contentProfile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";


const App = () => {
    return (
        <div className={'wrapper'}>
            <HeaderContainer/>
            <NavigationContainer/>
            <div className={'wrapper_content'}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/setting'
                       render={() => <Setting/>}/>
                <Route path='/findUsers'
                       render={() => <FindUsersContainer/>}/>
                <Route path='/login'
                       render={() => <Login/>}/>
            </div>
        </div>
    );
}
export default App;
