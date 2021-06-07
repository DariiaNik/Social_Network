import React from 'react'
import './Header.scss'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
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