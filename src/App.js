import './App.scss';
import React from 'react'
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import FindUsersContainer from "./Components/FindUsers/FindUsersContainer";
import ProfileContainer from "./Components/Content_Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


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
