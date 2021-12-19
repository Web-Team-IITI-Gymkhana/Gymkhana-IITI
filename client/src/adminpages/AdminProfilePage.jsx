import React from "react";
// import ReactDom from "react-dom";
import '../../src/index.css';
import '../components/Navbar/Navbar.css';
import '../components/Logo/Logo.css';
import '../components/Poster/Poster.css';
import '../components/Form/Form.css';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../components/Logo/Logo';
import Poster from '../components/Poster/Poster';
import Form from '../components/Form/Form';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

function AdminProfilePage() {
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

export default AdminProfilePage;
