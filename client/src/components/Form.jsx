import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
function Form() {
  return (
    <Grid item xs={6} id="info">
      <div>
        <form id="form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="club-name"
            label="Club Name"
            type="text"
            name="club-name"
            autoComplete="Club Name"
            className="field"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="field"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone No."
            type="tel"
            id="phone"
            autoComplete="9999999999"
            className="field"
          />
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              name="handle1"
              label="Social media 1"
              type="text"
              id="handle1"
              autoComplete="#"
              className=" field handle1"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              name="handle2"
              label="Social media 2"
              type="text"
              id="handle2"
              autoComplete="#"
              className=" field handle2"
            />
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="poster-caption"
            label="Poster Caption"
            type="text"
            name="poster-caption"
            autoComplete="Poster Caption"
            className="field"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            id="apply"
          >
            Apply Changes
          </Button>
        </form>
      </div>
    </Grid>
  );
}

export default Form;
