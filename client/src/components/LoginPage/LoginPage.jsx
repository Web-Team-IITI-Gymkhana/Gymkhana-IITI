import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../../CLIENT_ID';
import { AuthContext } from '../../contexts/AuthContext';


export default function LoginPage() {
    
    const { dispatch } = useContext(AuthContext)
    const onLoginSuccess = (res) => {
        console.log(res.profileObj)
        dispatch({
            type: 'LOGIN',
            payload: res.profileObj
        })
    }
    const onFailure = (e) => {
        console.log('failed', e)
    }
    
    return (
        <div className="container">
            <div className="display-3 mb-5 text-center">
                Gymkhana Login Portal
            </div>
            <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={onLoginSuccess}
            onFailure={onFailure}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
            // onAutoLoadFinished={() => dispatch({type: 'LOADING', payload: false})}
        />
        </div>
    )
}
