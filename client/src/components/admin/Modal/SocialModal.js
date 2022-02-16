import React from "react";
import "./SocialModal.css";
import TextField from '@mui/material/TextField'
// import Modal from '@material-ui/core/Modal';

function SocialModal({ closeModal }) {
    

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
                            defaultValue="https://www.facebook.com/IIT-Indore-108781240868622"
                        />
                        <TextField
                            fullWidth
                            type="url"
                            id="outlined-required"
                            label="Instagram"
                            defaultValue="https://www.instagram.com/iitindoreofficial/"
                        />
                        <TextField
                            fullWidth
                            type="url"
                            id="outlined-required"
                            label="LinkedIn"
                            defaultValue="https://www.linkedin.com/school/iit-indore/"
                        />
                        
                    </div>
                    <div className="footer">
                        <button onClick={() => closeModal(false)} id="cancelBtn">
                            Cancel
                        </button>
                        <button id="saveBtn">Save</button>
                    </div>
                </div>
            
        </div>
    );
}

export default SocialModal;
