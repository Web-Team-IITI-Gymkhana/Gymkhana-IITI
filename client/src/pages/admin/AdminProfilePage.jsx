import React from "react";
// import ReactDom from "react-dom";
import "../../index.css";
import "../../components/admin/Navbar/Navbar.css";
import "../../components/admin/Navbar/MobileNavbar.css";
import "../../components/admin/Logo/Logo.css";
import "../../components/admin/Poster/Poster.css";
import "../../components/admin/Form/Form.css";
import Navbar from "../../components/admin/Navbar/Navbar";
import MobileNavbar from "../../components/admin/Navbar/MobileNavbar";
import Logo from "../../components/admin/Logo/Logo";
import Poster from "../../components/admin/Poster/Poster";
import Form from "../../components/admin/Form/Form";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery, useTheme } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

function AdminProfilePage({userProfile,updateGeneralDetails}) {
    console.log(userProfile)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container component="main">
      <div className="outermost">
        {isMobile ? (
          <MobileNavbar />
        ) : (
          <>
            <Navbar />
            <hr></hr>
          </>
        )}

        <Poster userProfile={userProfile}/>

        <div>
          <Grid container spacing={2}>
            <Logo userProfile={userProfile}/>
            <Form userProfile={userProfile} updateGeneralDetails={updateGeneralDetails} />
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default AdminProfilePage;
