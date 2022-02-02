import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from "@material-ui/styles"
import { Card, Grid, Typography } from '@material-ui/core';
import { styles } from "../../../variable-css";
import { useDispatch } from 'react-redux';

import { saveSequence } from '../../../redux/actions/contentVersions';

const useStyles = makeStyles(styles)

function SectionTree({ sectionSequence, selectedSection, onSelectionChange }) {
    const classes = useStyles()



    const dispatch = useDispatch()

    const [currentSectionSeq, setCurrSecSeq] = useState(sectionSequence);
    const [editMode, setEditMode]=useState(false)

    console.log("In section tree sectionseq",sectionSequence)
    console.log("In section tree currsectionseq",currentSectionSeq)

    useEffect(()=>{
        setCurrSecSeq(sectionSequence)
    },[sectionSequence])




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
        let save = true
        const sequence= currentSectionSeq.map((section)=>section?section.sectionID:save=false)
        if(save){dispatch(saveSequence(sequence))}
    }
    const sections = currentSectionSeq.map((section, index) => {
        if(!section || !selectedSection){return null;}
        return (
            <Grid item xs={12} key={index}>
                <Card
                className={section.sectionID == selectedSection.sectionID ? classes.sectionHeaderCardSelected : classes.sectionHeaderCard}>
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
