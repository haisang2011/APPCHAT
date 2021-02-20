import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  MuiThemeProvider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  FormLabel,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .MuiFormLabel-root" : {
    //     fontSize : props => (props.isFieldLogin ? "0.875rem" : "1rem"),
    // },
    margin: (props) => (props.isFieldLogin ? "0 0 2rem 0" : null),
    width: "100%",

    "& .MuiInputBase-root": {
      fontSize: "13px",
      height: "33px",
    },

    "& .MuiFormLabel-root": {
      fontSize: "13px",
      lineHeight: "0.8",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: "3px",
    },
  },
}));

function InputField(props) {
  const classes = useStyles();

  const { name, placeholder, type, register, label, variant } = props;

  return (
    // <MuiThemeProvider theme={theme}>
    <TextField
      className={classes.root}
      margin="dense"
      label={label}
      variant={variant}
      type={type}
      // error={errors[name] && touched[name] ? true : (code===401 ? true : false)}
      placeholder={placeholder}
      name={name}
    />
    // </MuiThemeProvider>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  register: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  label: "example label",
  variant: "filled",
};

export default InputField;
