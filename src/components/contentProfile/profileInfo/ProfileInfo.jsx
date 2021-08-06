import React from 'react'
import './ProfileInfo.scss'
import Preloader from "../../common/preloader/Preloader";
import facebook from '../../../pictures/icons8-facebook-64.png'
import instagram from '../../../pictures/icons8-instagram-64.png'
import twitter from '../../../pictures/icons8-twitter-64.png'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>

    }
    return (
        <div>
            <div className={'content_main'}>
                <img className={'content_mainImage'}
                     src='https://smartstopselfstorage.com/media/2027/blogpost_minimalistlifestyle_1260x2890px.png?center=0.54978354978354982%2c0.81663516068052933&mode=crop&width=1920&heightratio=0.2708333333333333333333333333&format=jpg&quality=60&slimmage=true&rnd=131994895710000000'/>
            </div>
            <div className={'content_profile'}>
                <img className={'content_profileImage'}
                     src={props.profile.photos.small != null
                         ? props.profile.photos.small
                         : 'https://t3.ftcdn.net/jpg/02/72/37/08/360_F_272370853_Zaoj8QgRZ73HpCjD5XGO1gDdknlCRQeq.jpg'}
                />
                <div className={'content_bio'}>
                    <h3>{props.profile.fullName}</h3>
                    <ProfileStatus profile={props.profile} status={props.status}
                                   updateUserStatusTC={props.updateUserStatusTC}/>
                </div>
                <div className={'content_contact'}>
                    <div><a
                        href={props.profile.contacts.facebook?.match(/http/i) ? props.profile.contacts.facebook : ('https://' + props.profile.contacts.facebook)}><img
                        src={facebook}/></a></div>
                    <div><a
                        href={props.profile.contacts.instagram?.match(/http/i) ? props.profile.contacts.instagram : ('https://' + props.profile.contacts.instagram)}>
                        <img src={instagram}/></a></div>
                    <div><a
                        href={props.profile.contacts.twitter?.match(/http/i) ? props.profile.contacts.twitter : ('https://' + props.profile.contacts.twitter)}>
                        <img src={twitter}/></a></div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo