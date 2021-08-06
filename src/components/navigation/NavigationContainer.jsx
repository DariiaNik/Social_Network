import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

let mapDispatchToProps = () => {
    return {}
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;