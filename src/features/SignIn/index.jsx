import React from "react";
import LoginForm from "./components/LoginForm";
import {
  Button,
  Container,
  Grid,
  TextField,
  makeStyles,
  Typography,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  wrapperSignIn: {
    position: "absolute",
    top: "20vh",
  },
  form: {
    width: 400,
    textAlign: "center",
  },
  marginItem: {
    margin: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        background: grey[900],
        color: grey[200],
        padding: "12px",
        boxShadow: `1px 1px 2px ${grey[300]}`,
      },
    },
  },
});

function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapperSignIn}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
          className={classes.form}
        >
          <Grid item xs className={classes.marginItem}>
            <Typography variant="h3">Sign In</Typography>
          </Grid>
          <Grid item xs className={classes.marginItem}>
            <Typography variant="overline">
              We are Different, We are You Different.
            </Typography>
          </Grid>
          <Grid item xs className={classes.marginItem}>
            <TextField
              name="email"
              type="text"
              placeholder="enter email, Plz..."
              fullWidth
              size="medium"
              innerRef={register({
                required: true,
                pattern: /^[A-Za-z].gmail.com$/i,
              })}
            />
            {errors.email && <p>this field is required</p>}
          </Grid>
          <Grid item xs className={classes.marginItem}>
            <TextField
              name="password"
              type="password"
              placeholder="enter password, Plz..."
              fullWidth
              size="medium"
              innerRef={register({ required: true })}
            />
            {errors.password && <p>this field is required</p>}
          </Grid>
          <Grid item xs className={classes.marginItem}>
            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
            >
              sign up
            </Button>
          </Grid>
          <Grid item xs className={classes.marginItem}>
            <Typography>Don't have an account? Sign up.</Typography>
          </Grid>
        </form>
      </Grid>
    </MuiThemeProvider>
  );
}

export default SignIn;
