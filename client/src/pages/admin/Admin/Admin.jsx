import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styles } from "../../../variable-css";
import { makeStyles } from '@mui/styles'
// import AdminHomePage from "./AdminHomePage";
// import AdminProfilePage from "./AdminProfilePage";
// import Authenticate from "../../components/Auth/Authenticate";

const useStyles = makeStyles(styles)

function Admin() {
    const classes = useStyles()

    return (
        <>
            <h1 className={classes.heading1}>This is Admin side interface.</h1>
        </>
    )
}

export default Admin;
