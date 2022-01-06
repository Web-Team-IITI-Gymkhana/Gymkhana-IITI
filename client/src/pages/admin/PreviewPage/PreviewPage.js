import React from 'react'
import Button from "@material-ui/core/Button";
import { useState} from "react";
import Loading from '../../../components/Done/Loading';
import { useDispatch} from "react-redux";
import { publishVersion } from '../../../redux/actions/contentVersions';
import PreviewHome from "./PreviewHome/PreviewHome"

const centerButton = {
    display : 'flex',
    justifyContent : 'center',
    margin : '10px',
}

function PreviewPage({userProfile,sections}) {

    const dispatch = useDispatch()

    const [done, setDone] = useState(-1);
    const [loading, setLoading] = useState(-1);

    const userName = userProfile.userName

    const getPublish = () =>{
        dispatch(publishVersion(userName))
        setDone(0);
        setLoading(0);
        setTimeout(() => {
            //publish new
            setLoading(1);
            setTimeout(() => {
                setDone(1);
            }, 1000)
        }, 1200);

    }

    return (
        <div>
            <div style={centerButton}>
                <Button
                    variant="contained"
                    className="nav-btn"
                    id="first-btn"
                    color="primary"
                    onClick={getPublish}
                >
                    Publish
                </Button>
            </div>

            {done===0? (
                        <Loading Loading={loading}/>
                ):null}

            <PreviewHome userProfile={userProfile} sections={sections}/>
        </div>
    )
}

export default PreviewPage
