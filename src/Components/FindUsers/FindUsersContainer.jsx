import React from "react";
import {connect} from "react-redux";
import {
    findUsers, followPost,
    followingProgressToggle,
    followToggle,
    setCurrentPage,
    setCurrentPageToLeft, setCurrentPageToRight, followDelete, onPageChanged,

} from "../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import './FindUsers.scss'
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";



class FindUsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.findUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.onPageChanged(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <FindUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPageToLeft={this.props.setCurrentPageToLeft}
                setCurrentPageToRight={this.props.setCurrentPageToRight}
                onPageChanged={this.onPageChanged}
                followToggle={this.props.followToggle}
                users={this.props.users}
                followingProgressToggle={this.props.followingProgressToggle}
                followingProgress={this.props.followingProgress}
                followPost = {this.props.followPost}
                followDelete = {this.props.followDelete}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching,
        followingProgress: state.findUsers.followingProgress,
    }
}



export default compose(
    connect(
        mapStateToProps,
        {
            followToggle,
            setCurrentPage,
            setCurrentPageToLeft,
            setCurrentPageToRight,
            followingProgressToggle,
            findUsers,
            followPost,followDelete,
            onPageChanged
        }
    ),
    WithAuthRedirect
)(FindUsersContainer)