import React from 'react'
import Profile from "./Profile";
import {getProfileTC, setUsersProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";




class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2;
        }
        this.props.getProfileTC(userId);
    }

    render() {
        return (
                <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) ;

export default connect(mapStateToProps, {getProfileTC})(WithUrlDataContainerComponent)