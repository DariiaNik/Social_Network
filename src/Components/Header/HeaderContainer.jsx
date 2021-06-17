import React from 'react'
import './Header.scss'
import Header from "./Header";
import {connect} from "react-redux";
import {authTC, setUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/userAPI";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authTC();
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})

export default connect( mapStateToProps, {authTC}) (HeaderContainer);