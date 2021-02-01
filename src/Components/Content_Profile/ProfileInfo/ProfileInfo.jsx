import React from 'react'
import './ProfileInfo.scss'


const ProfileInfo = () => {
    return (
        <div>
            <div className={'content_main'}>
                <img className={'content_mainImage'}
                     src='https://smartstopselfstorage.com/media/2027/blogpost_minimalistlifestyle_1260x2890px.png?center=0.54978354978354982%2c0.81663516068052933&mode=crop&width=1920&heightratio=0.2708333333333333333333333333&format=jpg&quality=60&slimmage=true&rnd=131994895710000000'/>
            </div>
            <div className={'content_profile'}>
                <img className={'content_profileImage'}
                     src='https://png.pngtree.com/png-clipart/20190827/ourlarge/pngtree-hand-drawn-minimalist-line-woman-avatar-png-image_1701001.jpg'/>
                <div className={'content_bio'}>
                    <h3>Dariia Nikolaieva</h3>
                    <p>Hello,I am 25</p>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo