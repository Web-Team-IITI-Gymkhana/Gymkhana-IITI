import React from "react";
import PosterModal from "./PosterModal";

function Poster({userProfile}) {
  return (
    <div>

        <img
            src={userProfile.src}
            alt="Club Poster"
            width="100%"
            height="300px"
            id="poster"></img>

        <PosterModal userName={userProfile.userName}/>
    </div>
  );
}

export default Poster;
