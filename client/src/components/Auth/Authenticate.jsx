import React  from 'react'
import Buttton from '@material-ui/core/Button'

export default function Authenticate() {
        // const LOGIN_URL = "http://localhost:5000/google"
        const LOGIN_URL = "https://gymkhana-iiti.herokuapp.com/google"
        const googleLogin = ()=>{
            window.open(LOGIN_URL, "_self");
        }
        return (
        <div>

            <Buttton onClick={googleLogin}>Login With Google</Buttton>

        </div>
    )
}
