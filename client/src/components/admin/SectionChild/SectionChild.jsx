import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@material-ui/core/Button";

import "./SectionChild.css";

import SectionChildModal from "../Modal/SectionChildModal";
import { deleteSectionChild } from "../../../redux/actions/contentVersions"
import { useDispatch } from "react-redux";

const ExpandMore = styled((props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));


function SectionChild({userName,sectionID,sectionChild}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch()
    const handleDelete = (sectionChildID) => {
        dispatch(deleteSectionChild(userName,sectionID,sectionChildID))
    }

    const editButton = {"buttonName":"Edit","buttonID":"edit","buttonVariant":"text"}

    return (
        <div className="sectionChild-div">
            <Card sx={{ maxWidth: 345 }}>
                <h5 className="child-header">{sectionChild.sectionChildName}</h5>
                <SectionChildModal userName={userName} sectionID={sectionID} sectionChildID={sectionChild.sectionChildID} sectionChild={sectionChild}  type={"editSectionChild"} buttonStyle={editButton}/>
                <Button id="delete" variant="text" onClick={()=>{handleDelete(sectionChild.sectionChildID)}}>Delete</Button>

                <CardMedia
                    component="img"
                    height="100"
                    image={sectionChild.sectionChildImage}
                    alt="event-photo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {sectionChild.sectionChildShortDesc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph variant="body2" color="text.secondary">
                            {sectionChild.sectionChildDesc}
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                        {sectionChild.sectionChildLinks}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default SectionChild;
