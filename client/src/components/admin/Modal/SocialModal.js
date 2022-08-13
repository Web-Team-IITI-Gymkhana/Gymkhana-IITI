import React from "react";
import "./SocialModal.css";
import TextField from '@mui/material/TextField'

import { useState} from "react";

function modify(arr){
    let len = arr.length
    if(len<3)
    {
        let diff = 3-len;
        for(let i=1;i<=diff;i++)
        {
            arr.push("")
        }
    }
    return arr
}

const isValidUrl = link => {
    let href = link.match(/\((..*?)\)/) ? link.match(/\((..*?)\)/)[1] : null;

    if(href==="" || href===null){return true;}

    try {
        return Boolean(new URL(href));
    }
    catch(e){
        return false;
    }
}

function SocialModal({ closeModal , formSectionChild ,setFormSectionChild}) {

    const [socialMedia,setSocialMedia] = useState(modify(formSectionChild.sectionChildLinks))


    console.log("In social modal ",socialMedia)

    const saveSocialMedia = (event)=>{
        event.preventDefault();
        console.log("Saving",socialMedia)

        let allowed = true

        socialMedia.map(link=>{
            if(allowed && !isValidUrl(link)){alert("Enter valid url"); allowed = false;}
        })

        if(!allowed){
            return
        }

        setFormSectionChild({ ...formSectionChild, sectionChildLinks: [...socialMedia] })
        closeModal(false)
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => closeModal(false)}> x </button>
                    </div>
                    <div className="title">
                        <h4>Please Provide Links Related to this event</h4>
                    </div>

                    <div className="instructions">
                        <p className="inst">
                            format : [text](link) <br/>
                            Example : [Github](https://github.com/)
                        </p>
                    </div>

                    <div className="body">
                        <TextField
                            fullWidth
                            // type="url"
                            id="outlined-required"
                            label="Link 1 "
                            required={false}
                            value={socialMedia[0]}
                            onChange={(e)=>{setSocialMedia([e.target.value,socialMedia[1],socialMedia[2]])}}
                            // defaultValue="https://www.facebook.com/IIT-Indore-108781240868622"
                        />
                        <TextField
                            fullWidth
                            // type="url"
                            id="outlined-required"
                            label="Link 2"
                            required={false}
                            value={socialMedia[1]}
                            onChange={(e)=>{setSocialMedia([socialMedia[0],e.target.value,socialMedia[2]])}}
                            // defaultValue="https://www.instagram.com/iitindoreofficial/"
                        />
                        <TextField
                            fullWidth
                            // type="url"
                            id="outlined-required"
                            label="Link 3"
                            required={false}
                            value={socialMedia[2]}
                            onChange={(e)=>{setSocialMedia([socialMedia[0],socialMedia[1],e.target.value])}}
                            // defaultValue="https://www.linkedin.com/school/iit-indore/"
                        />

                    </div>
                    <div className="footer">
                        <button onClick={() => closeModal(false)} id="cancelBtn">
                            Cancel
                        </button>
                        <button id="saveBtn" onClick={saveSocialMedia}>Save</button>
                    </div>
            </div>


        </div>
    );
}

export default SocialModal;
