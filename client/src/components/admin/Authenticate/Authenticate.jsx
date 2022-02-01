import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loginAdmin } from '../../../redux/actions/adminAuth';

export default function Authenticate() {

    const dispatch = useDispatch()
    const loginURL = process.env.REACT_APP_DEV === 'true' ? "http://localhost:5000/auth/googlelogin" : "https://gymkhana-iiti.herokuapp.com/auth/googlelogin";
    console.log("LOGIN ROUTE IS ", loginURL)

    const responseSuccessGoogle = (response) => {
        console.log(response)
        axios({
            method: "POST",
            url: loginURL,
            data: { tokenId: response.tokenId }
        }).then(response => {
            console.log(response)
            if (response.status === 200) {
                console.log(response)
                localStorage.setItem('token', response.data.token)
                console.log("After google login,setting token as ", response.data.token)
                console.log("Logging in as", response.data.user.userName)
                dispatch(loginAdmin())
            }
        })
    }

    const responseErrorGoogle = (response) => {
        console.log(response)
    }

    return (
        <div>

            <GoogleLogin
                clientId="750894076426-off7cchrpi2kgcfec64h6vr2ddgl4vfn.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            ></GoogleLogin>

        </div>
    )
}
