import React from 'react'
import Profile from "./Profile";
import {getProfileTC, getUserStatusTC,updateUserStatusTC} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 16393;
        }
        this.props.getProfileTC(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatusTC={this.props.updateUserStatusTC}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose(
    connect(mapStateToProps, {getProfileTC,getUserStatusTC,updateUserStatusTC}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)