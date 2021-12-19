import React from "react";
import Button from "@material-ui/core/Button";

function Poster() {
  return (
    <div>

      {/* <img
            src="\client\src\components\photos\poster.jpg\photos\poster.jpg"
            alt="Club Poster"
            width="100%"
            height="300px"
          ></img> */}
      <img
        src="https://media.istockphoto.com/photos/any-questions-picture-id1296881945?b=1&k=20&m=1296881945&s=170667a&w=0&h=RZT0juI3SI1OLwjLQOamGnjADo9O6AAGRsjG3Kd4TsU="
        alt="Club Poster"
        width="100%"
        height="350px"
      ></img>
      <Button variant="contained" id="edit-poster" color="primary">
        Edit Poster
      </Button>
    </div>
  );
}

export default Poster;
