import React , {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loginAdmin } from '../../../redux/actions/adminAuth';
import Logo from './gymkhana.png'
import './Authenticate.css'

export default function Authenticate() {

    const dispatch = useDispatch()
    const loginURL = process.env.REACT_APP_DEV === 'true' ? "http://localhost:5000/auth/googlelogin" : "https://gymkhana-iiti.herokuapp.com/auth/googlelogin";
    console.log("LOGIN ROUTE IS ", loginURL)

    function handleCallbackResponse(response){

        var userObject = jwt_decode(response.credential)
        console.log(userObject)

        axios({
            method: "POST",
            url: loginURL,
            data: { email: userObject.email }
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

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id:"687468938838-qv69j02oai1engmjkd6el428ui4uquom.apps.googleusercontent.com",
            callback : handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme : "outline" , size : "large"}
        )
    },[])


    console.log(window.location.origin)

    return (
        <div className="bggg">
            <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={Logo} alt="Logo" height={90}/>
                </div>
                <br></br>

                <h4 className="fadeIn second">Hey, good to see you again!</h4>
                <p className="fadeIn third">Login to get going.</p>
                <br></br>
                <div id="signInDiv"></div>
                <br/><br/>
                <p className="fadeIn fourth">Please Use College ID</p>

            </div>
            </div>

        </div>
    )
}
