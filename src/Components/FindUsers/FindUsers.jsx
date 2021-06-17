import React from "react";
import Left from "../../Pictures/icons8-left-24.png";
import Right from "../../Pictures/icons8-right-24.png";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/userAPI";


const FindUsers = (props) => {

    let pageCounts = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    if (props.currentPage > 3) {
        pages.push(1);
        pages.push(' ... ');
    }
    if (props.currentPage > 1) {
        pages.push(props.currentPage - 1)
    }
    pages.push(props.currentPage);

    if (props.currentPage < pageCounts) {
        pages.push(props.currentPage + 1)
    }
    if (props.currentPage + 2 < pageCounts) {
        pages.push(' ... ');
    }
    if (props.currentPage + 1 < pageCounts) {
        pages.push(pageCounts);
    }
    return (
        <div>

            {
                props.users.map(u => <div key={u.id} className={'block'}>
                    <div className={'main'}>
                        <div>
                            <NavLink to={'/profile/'+ u.id} >
                                <img className={'avatar'}
                                     src={u.photos.small != null
                                         ? u.photos.small
                                         : 'https://t3.ftcdn.net/jpg/02/72/37/08/360_F_272370853_Zaoj8QgRZ73HpCjD5XGO1gDdknlCRQeq.jpg'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} className={'buttonFollow'} onClick={() => {
                                    props.followDelete(u.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === u.id)} className={'buttonFollow'} onClick={() => {
                                    props.followPost(u.id);
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={'information'}>
                        <div className={'information_main'}>
                            <div className={'information_main_name'}>{u.name}</div>
                            <div className={'information_main_status'}>{u.status}</div>
                        </div>
                        <div className={'information_location'}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
            <div className={'pagination'}>
                <div className={'pageButton'} onClick={(e) => {
                    props.setCurrentPageToLeft(props.currentPage);
                    if (props.currentPage > 1) {
                        props.onPageChanged(props.currentPage - 1)
                    }
                }}><img src={Left}/></div>
                <div className={'pages'}>
                    {pages.map(p => {
                        return <div className={props.currentPage === p && 'selectedPage'}
                                    onClick={(e) => {
                                        if (p !== ' ... ') {
                                            props.onPageChanged(p)
                                        }
                                    }}
                        >{p} </div>
                    })}
                </div>
                <div className={'pageButton'} onClick={() => {
                    props.setCurrentPageToRight(props.currentPage);
                    if (props.currentPage < props.totalUsersCount / props.pageSize) {
                        props.onPageChanged(props.currentPage + 1)
                    }

                }}><img src={Right}/></div>
            </div>
        </div>
    )
}


export default FindUsers