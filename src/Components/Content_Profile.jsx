import React from 'react'
import './Content_Profile.css'


const Content_Profile = ()=>{
    return(
        <div className={'content'}>
            <div>
                <img className={'content_mainImage'}
                     src='https://smartstopselfstorage.com/media/2027/blogpost_minimalistlifestyle_1260x2890px.png?center=0.54978354978354982%2c0.81663516068052933&mode=crop&width=1920&heightratio=0.2708333333333333333333333333&format=jpg&quality=60&slimmage=true&rnd=131994895710000000'/>
            </div>
            <div className={'content_profile'}>
                ava+discription
                <img className={'content_profileImage'}
                     src='https://image.freepik.com/free-photo/minimalistic-tropical-still-life-two-halves-chopped-coconut-with-shadows-from-palm-leaves-pink-background-creative-fashion-concept_175682-7259.jpg'/>
            </div>
            <div>
                my post
                <div>
                    New Post
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Content_Profile