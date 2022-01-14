import React  from 'react'
import Buttton from '@material-ui/core/Button'

export default function Authenticate() {
        const googleLogin = ()=>{
            window.open("http://localhost:5000/google", "_self");
        }
        return (
        <div>

            <Buttton onClick={googleLogin}>Login With Google</Buttton>

        </div>
    )
}
