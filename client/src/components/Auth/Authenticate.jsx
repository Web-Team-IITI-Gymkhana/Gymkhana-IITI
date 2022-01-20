import React  from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import configData from "../../config.prod.json"

export default function Authenticate({setUser}) {

        console.log("LOGIN ROUTE IS ",configData.LOGIN_URL)

        const responseSuccessGoogle = (response) => {
            console.log(response)
            axios({
                method:"POST",
                url: configData.LOGIN_URL,
                data : {tokenId : response.tokenId}
            }).then(response=>{
                console.log(response)
                if(response.status === 200)
                {
                    localStorage.setItem('token',response.data.token)
                    console.log("After google login,setting token as ",response.data.token)
                    setUser(response.data)
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
