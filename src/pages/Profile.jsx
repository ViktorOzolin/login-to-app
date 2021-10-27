import React from "react";
import { useSelector } from "react-redux";


const Profile = () => {
 const userLogin = useSelector(state => state.auth.user.login)   
    return(
        <>
        <h1>{userLogin}</h1>
        </>
    );
}

export default Profile;