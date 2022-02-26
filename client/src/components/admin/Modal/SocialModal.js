import React from "react";
import "./SocialModal.css";
import TextField from '@mui/material/TextField'

import { useState , useEffect } from "react";

function SocialModal({ closeModal , formSectionChild ,setFormSectionChild}) {

    const [socialMedia,setSocialMedia] = useState(formSectionChild.sectionChildLinks)

    useEffect(()=>{
        let arr = formSectionChild.sectionChildLinks
        let len = arr.length
        if(len<=3)
        {
            let diff = 3-len;
            while(diff--)
            {
                arr.push("")
            }
        }
        else
        {
            arr.splice(0,3);

        }
        setSocialMedia(arr);
    },[])

    console.log("socialMedia",socialMedia)

    const saveSocialMedia = ()=>{
        console.log("Saving",socialMedia)
        setFormSectionChild({ ...formSectionChild, sectionChildLinks: [...socialMedia] })
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button onClick={() => closeModal(false)}> x </button>
                    </div>
                    <div className="title">
                        <h4>Please Provide the Social Media Links</h4>
                    </div>
                    <div className="body">
                        <TextField
                            fullWidth
                            type="url"
                            id="outlined-required"
                            label="Facebook"
                            value={socialMedia[0]}
                            onChange={(e)=>{setSocialMedia([e.target.value,socialMedia[1],socialMedia[2]])}}
                            // defaultValue="https://www.facebook.com/IIT-Indore-108781240868622"
                        />
                        <TextField
                            fullWidth
                            type="url"
                            id="outlined-required"
                            label="Instagram"
                            value={socialMedia[1]}
                            onChange={(e)=>{setSocialMedia([socialMedia[0],e.target.value,socialMedia[2]])}}
                            // defaultValue="https://www.instagram.com/iitindoreofficial/"
                        />
                        <TextField
                            fullWidth
                            type="url"
                            id="outlined-required"
                            label="LinkedIn"
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
