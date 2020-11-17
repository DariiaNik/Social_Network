import './App.css';
import React from 'react'
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Content_Profile from "./Components/Content_Profile";


const App = () => {
    return (
        <div className={'wrapper'}>
           <Header/>
           <Navigation/>
           <Content_Profile/>
        </div>
    );
}
export default App;
