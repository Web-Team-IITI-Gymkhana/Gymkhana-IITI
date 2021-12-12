import React from "react";
// import ReactDom from "react-dom";
import Navbar from "./Navbar";
import Poster from "./Poster";
import Logo from "./Logo";
import Form from "./Form";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Home() {
  return (
    <Container component="main">
      <div className="outermost">
        <Navbar />
        <hr></hr>
        <Poster />

        <div>
          <Grid container spacing={2}>
            <Logo />
            <Form />
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Home;
