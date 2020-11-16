import './App.css';
import React from 'react'
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";


const App = () => {
    return (
        <div className={'wrapper'}>
           <Header/>
           <Navigation/>
           <Profile/>
           <div>sgsdfdr</div>
        </div>
    );
}
export default App;
