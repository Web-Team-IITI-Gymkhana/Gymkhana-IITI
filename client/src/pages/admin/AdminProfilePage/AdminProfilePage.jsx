import React from "react";
import { Grid, useTheme, useMediaQuery } from "@material-ui/core";

import "../../../index.css"

import Form from "../../../components/admin/Form/Form";
import Navbar from "../../../components/admin/Navbar/Navbar"
import MobileNavbar from "../../../components/admin/Navbar/MobileNavbar"
import {EditableProfileImage} from "../../../components/admin/EditableProfileImage/EditableProfileImage"


import "../../../components/admin/Navbar/Navbar.css";
import "../../../components/admin/Navbar/MobileNavbar.css";
import "../../../components/admin/Logo/Logo.css";
import "../../../components/admin/Poster/Poster.css";
import "../../../components/admin/Form/Form.css";


function AdminProfilePage({ userProfile }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
          <MobileNavbar profilePic={userProfile.logo} />
        ) : (
          <>
          <Navbar profilePic={userProfile.logo} />
            <hr></hr>
          </>
        )}

      <Grid container spacing={2} style={{ padding: 20, justifyContent: 'center' }}>
        <Grid item sm={8} xs={12}>
          <EditableProfileImage userProfile={userProfile} imageAlt={'Club Poster'} type="poster" imageSrc={userProfile.src} />
        </Grid>

        <Grid item sm={4} xs={12}>
          <EditableProfileImage userProfile={userProfile} imageAlt={'Club Logo'} type="logo" imageSrc={userProfile.logo} />
        </Grid>

        <Grid item sm={12} xs={12}>
          <Form userProfile={userProfile} />
        </Grid>
      </Grid>
    </>
  );
}

export default AdminProfilePage;
