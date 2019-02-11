import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
const styles = theme => ({
  root: {
    width: "90%",
    margin: "0 auto",
    marginTop: 10,
    paddingTop: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes, user, deleteUser, populateForm } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{user.name}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography>{user.bio}</Typography>
        </ExpansionPanelDetails>
        <Tooltip title="Delete" onClick={() => deleteUser(user.id)}>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" onClick={() => populateForm(user)}>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
