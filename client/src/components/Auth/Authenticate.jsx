import React  from 'react'
import Buttton from '@material-ui/core/Button'

export default function Authenticate() {

        const googleLogin = ()=>{
            window.open(process.env.REACT_APP_LOGIN_URL, "_self");
        }
        return (
        <div>

            <Buttton onClick={googleLogin}>Login With Google</Buttton>

        </div>
    )
}
