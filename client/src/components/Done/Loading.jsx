import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Lottie from 'react-lottie';
import * as doneAnimation from './doneAnimation.json';
import * as loadAnimation from './loadAnimation.json';

const loadOptions = {
    loop: true,
    autoplay: true,
    animationData: loadAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};
const doneOptions = {
    loop: false,
    autoplay: true,
    animationData: doneAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};


const Loading = (Loading) =>{
    console.log(Loading.Loading);
    return(
        <Modal show={true} style={{marginTop: '7rem'}}>
            {Loading.Loading===0 ?(
                <Lottie options={loadOptions} height={200} width={200}/>
            ):(

                <Lottie options={doneOptions} height={200} width={200}/>
            )}
        </Modal>

    );
}

export default Loading;
