import React from 'react'
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {profileAPI} from "../../api/userAPI";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2;
        }
       profileAPI.profile(userId)
            .then(data=> {
                this.props.setUsersProfile(data);
            })
    }

    render() {
        return (
                <Profile {...this.props} profile = {this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer) ;

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)