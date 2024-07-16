import React from "react";
import {useParams} from 'react-router-dom';

const data = {
    velopert: {
        name: 'Kim Min Joon',
        describe: 'Who likes React as a programmer',
    },
    gildong: {
        name: 'Hong Gil Dong',
        describe: 'main charactor of aicient novel',
    },
};

const Profile =()=>{
    const params = useParams();
    const profile = data[params.username];

    return(
        <div>
            <h1>user profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.describe}</p>
                </div>    
            ) : (
                <p>no exist profile</p>
            )}
        </div>
    );
};

export default Profile;