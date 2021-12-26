import React from "react";
import ImgUploadModal from "../Modal/ImgUploadModal"

function Poster({userProfile}) {
  return (
    <div>

        <img
            src={userProfile.src}
            alt="Club Poster"
            width="100%"
            height="300px"
            id="poster"></img>

        <ImgUploadModal userName={userProfile.userName} type="poster"
            buttonName = "Edit Poster"
        />
    </div>
  );
}

export default Poster;
