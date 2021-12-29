import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Photo from "../../photos/background.jpg";
import "./SectionChild.css";

import SectionChildModal from "../Modal/SectionChildModal";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

// {"sectionChildName" : "","sectionChildImage" : "","sectionChildDesc" : ""}

function SectionChild({userName,sectionID,sectionChild}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const editButton = {"buttonName":"Edit","buttonID":"edit","buttonVariant":"text"}

    return (
        <div className="sectionChild-div">
            <Card sx={{ maxWidth: 345 }}>
                {/* <CardHeader
                    action={
                        <IconButton aria-label="settings" >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Section Child"
                /> */}
                <h5 className="child-header">{sectionChild.sectionChildName}</h5>
                <SectionChildModal userName={userName} sectionID={sectionID} sectionChildID={sectionChild.sectionChildID} sectionChild={sectionChild}  type={"editSectionChild"} buttonStyle={editButton}/>
                <Button id="delete" variant="text">Delete</Button>

                <CardMedia
                    component="img"
                    height="100"
                    image={sectionChild.sectionChildImage}
                    alt="event-photo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {sectionChild.sectionChildDesc}
                    </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
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
                            Further Information :
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            Detailed Info about the Event.
                        </Typography>
                    </CardContent>
                </Collapse> */}
            </Card>
        </div>
    );
}

export default SectionChild;
