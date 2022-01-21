import { Box } from "@material-ui/core";
import React from "react";

import ImgUploadModal from "../Modal/ImgUploadModal"

function Poster({ userProfile }) {
  return (
    <Box width={700}>
      <img
        src={userProfile.src}
        alt="Club Poster"
        height="100%" />

      <ImgUploadModal userName={userProfile.userName} type="poster"
        buttonName="Edit Poster"
      />
    </Box>
  );
}

export default Poster;
