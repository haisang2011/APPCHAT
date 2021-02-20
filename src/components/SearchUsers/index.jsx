import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  makeStyles,
  SvgIcon,
  TextField,
  Typography,
} from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InputField from "../../customs/fields/InputField";
import SelectField from "../../customs/fields/SelectField";

/* Custom Icon three dots vertical */
function ThreeDots() {
  return (
    <SvgIcon
      className="text-muted hw-20 mt-2 dropdown-toggle"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: blueGrey[800],
  },
}));

function SearchUsers(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={6}>
          <Typography>Chats</Typography>
        </Grid>
        <Grid item xs={6} container>
          <Grid item xs={3}>
            <NotificationsIcon />
          </Grid>
          <Grid item xs={3}>
            <ThreeDots />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <SelectField label="All chats" />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={8}>
          <InputField
            name="filter"
            placeholder="Search Users"
            type="text"
            register="kaka"
            label="search users"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

SearchUsers.propTypes = {};

export default SearchUsers;

/* 
<Grid item xs={12} container style={{ backgroundColor: "blue" }}>
          <Grid item xs={4} style={{ backgroundColor: "red" }}>
            Chats
          </Grid>
          <Grid item xs={5} style={{ backgroundColor: "green" }}>
            lala
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={4}>
            ALL CHATS
          </Grid>
          <Grid item xs={8}>
            SEARCH USERS
          </Grid>
        </Grid>
*/
