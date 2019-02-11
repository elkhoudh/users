import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  render() {
    const {
      classes,
      name,
      bio,
      handleChange,
      addUser,
      isUpdating,
      editUser
    } = this.props;

    return (
      <form
        onSubmit={isUpdating ? editUser : addUser}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={name}
          margin="normal"
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="standard-uncontrolled"
          name="bio"
          label="Bio"
          value={bio}
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />
        <Button color="primary" type="submit">
          {isUpdating ? "Update User" : "Add User"}
        </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
