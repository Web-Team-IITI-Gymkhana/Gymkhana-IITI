import React  from 'react'
import Buttton from '@material-ui/core/Button'
// import configData from "./../../config.prod.json"

export default function Authenticate() {
        // console.log("LOGIN URL IS", configData.LOGIN_URL)
        const googleLogin = ()=>{
            // window.open(configData.LOGIN_URL, "_self");
            console.log("LOGIN")
        }
        return (
        <div>

            <Buttton onClick={googleLogin}>Login With Google</Buttton>

        </div>
    )
}
