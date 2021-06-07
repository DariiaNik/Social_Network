import React from "react";
import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setCurrentPageToLeft, setCurrentPageToRight,
    setTotalUsersCount,
    setUsers, toggleIsFetching
} from "../../redux/findUsersReducer";
import * as axios from "axios";
import FindUsers from "./FindUsers";
import './FindUsers.scss'
import Preloader from "../common/preloader/preloader";


class FindUsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
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