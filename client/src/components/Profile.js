import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import axios from 'axios';
import mainUrl from '../helpers/reqHelper';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    
    React.useEffect(() => {
        if (user) {
            axios.post(`${mainUrl}/users/create-user`, {data: {
                nickname: user.nickname,  
                first_name: user.given_name, 
                last_name: user.family_name, 
                email: user.email
            }}).then(res => console.log("res", res))
        };
    }, [user]);

    return (
        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <JSONPretty data={user} />
        </div>
    )
};

export default Profile
