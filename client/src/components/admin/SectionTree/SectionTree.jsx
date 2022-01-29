import React from 'react';
import { useState } from 'react';
import { makeStyles } from "@material-ui/styles"
import { Card, Grid, Typography } from '@material-ui/core';
import { styles } from "../../../variable-css";

const useStyles = makeStyles(styles)

function SectionTree({ sectionSequence, selectedSection, onSelectionChange }) {
    const classes = useStyles()

    const [currentSectionSeq, setCurrSecSeq] = useState(sectionSequence);
    const [editMode, setEditMode]=useState(false)

    function handleUp(index) {
        if (index == 0) {
            return
        }
        let newSeq= [...currentSectionSeq];
        let temp = newSeq[index];
        newSeq[index] = newSeq[index - 1];
        newSeq[index - 1] = temp;
        setCurrSecSeq(newSeq)
    }
    function handleDown(index) {
        if (index == currentSectionSeq.length-1) {
            return
        }
        let newSeq= [...currentSectionSeq];
        let temp = newSeq[index];
        newSeq[index] = newSeq[index + 1];
        newSeq[index + 1] = temp;
        setCurrSecSeq(newSeq)
    }
    function handleEdit() {
        setEditMode(!editMode)
        const sequence= currentSectionSeq.map((section)=>section.sectionID)
        //write code for dispatching sequence
        console.log("dispatch", sequence)
    }
    const sections = currentSectionSeq.map((section, index) => {
        return (
            <Grid item xs={12} key={index}>
                <Card
                className={section.sectionID === selectedSection.sectionID ? classes.sectionHeaderCardSelected : classes.sectionHeaderCard}>
               <Typography onClick={()=>onSelectionChange(section.sectionID)}> {section.sectionHeader} </Typography>
                {editMode ? <div>
                        {index != 0 ? <button onClick={() => handleUp(index)}>Up</button>: null}
                        {index != currentSectionSeq.length - 1 ? <button onClick={() => handleDown(index)}>Down</button> : null}
                    </div> : null}
                </Card>
            </Grid>
        )
    })
    return (
        <Grid container spacing={1}>
                {sections}
            <Grid item xs={12}>
                <button onClick={handleEdit}>{ editMode?'Save':'Edit'}</button>
            </Grid>
        </Grid>
    );
}

export default SectionTree;
