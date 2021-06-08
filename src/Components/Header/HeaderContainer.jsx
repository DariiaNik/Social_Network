import React from 'react'
import './Header.scss'
import Header from "./Header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";
import {authAPI} from "../../api/userAPI";


class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserDataAC(id,email,login)
                }
            })
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})

export default connect( mapStateToProps, {setUserDataAC}) (HeaderContainer);