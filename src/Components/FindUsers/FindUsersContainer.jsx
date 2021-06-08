import React from "react";
import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setCurrentPageToLeft, setCurrentPageToRight,
    setTotalUsersCount,
    setUsers, toggleIsFetching
} from "../../redux/findUsersReducer";
import FindUsers from "./FindUsers";
import './FindUsers.scss'
import Preloader from "../common/preloader/preloader";
import {userAPI} from "../../api/userAPI";



class FindUsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
       userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
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
    }
}


export default connect(
    mapStateToProps,
    {
        setUsers,
        followToggle,
        setCurrentPage,
        setTotalUsersCount,
        setCurrentPageToLeft,
        setCurrentPageToRight,
        toggleIsFetching
    }
)(FindUsersContainer);