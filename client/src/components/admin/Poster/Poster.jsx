import React from "react";
import Button from "@material-ui/core/Button";
// import poster from "../../photos/poster.jpg"
import PosterModal from "./PosterModal";
// import {Box} from "@mui/material";

function Poster({posterSrc}) {
  return (
    <div>

        <img
            src={posterSrc}
            alt="Club Poster"
            width="100%"
            height="300px"
            id="poster"></img>

        <PosterModal/>
    </div>
  );
}

export default Poster;
