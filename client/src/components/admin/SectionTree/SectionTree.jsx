import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from "@material-ui/styles"
import { Box, Card, Container, Grid, Icon, IconButton, Typography } from '@material-ui/core';
import { styles } from "../../../variable-css";
import { useDispatch } from 'react-redux';

import { saveSequence } from '../../../redux/actions/contentVersions';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const useStyles = makeStyles(styles)

function SectionTree({ sectionSequence, selectedSection, onSelectionChange }) {
    const classes = useStyles()



    const dispatch = useDispatch()

    const [currentSectionSeq, setCurrSecSeq] = useState(sectionSequence);
    const [editMode, setEditMode] = useState(false)

    console.log("In section tree sectionseq", sectionSequence)
    console.log("In section tree currsectionseq", currentSectionSeq)

    useEffect(() => {
        setCurrSecSeq(sectionSequence)
    }, [sectionSequence])




    function handleUp(index) {
        if (index == 0) {
            return
        }
        let newSeq = [...currentSectionSeq];
        let temp = newSeq[index];
        newSeq[index] = newSeq[index - 1];
        newSeq[index - 1] = temp;
        setCurrSecSeq(newSeq)
    }
    function handleDown(index) {
        if (index == currentSectionSeq.length - 1) {
            return
        }
        let newSeq = [...currentSectionSeq];
        let temp = newSeq[index];
        newSeq[index] = newSeq[index + 1];
        newSeq[index + 1] = temp;
        setCurrSecSeq(newSeq)
    }
    function handleEdit() {
        setEditMode(!editMode)
        const sequence = currentSectionSeq.map((section) => section.sectionID)
        dispatch(saveSequence(sequence))
    }
    const sections = currentSectionSeq.map((section, index) => {
        const isSelected = section.sectionID == selectedSection.sectionID

        return (
            <Grid item xs={12} key={index}>
                <Card
                    className={isSelected ? classes.sectionHeaderCardSelected : classes.sectionHeaderCard}>
                    <Typography onClick={() => onSelectionChange(section.sectionID)}> {section.sectionHeader} </Typography>
                    {editMode ? <Box display={'flex'}>
                        {index != 0 ? <IconButton onClick={() => handleUp(index)}><ArrowUpward htmlColor={isSelected ? 'white' : 'black'} /></IconButton> : null}
                        {index != currentSectionSeq.length - 1 ? <IconButton onClick={() => handleDown(index)}><ArrowDownward htmlColor={isSelected ? 'white' : 'black'} /></IconButton> : null}
                    </Box> : null}
                </Card>
            </Grid>
        )
    })
    return (
        <Grid container spacing={1}>
            {sections}
            <Box display={'flex'} width={'100%'} margin={2} justifyContent={'center'}>
                <button className={classes.buttonPrimary} onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}</button>
            </Box>
        </Grid>
    );
}

export default SectionTree;
