import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // fontSize: "1rem",
    "& .MuiInputBase-root": {
      fontSize: "13px",
      height: "33px",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(12px, 12px) scale(0.8)",
    },
    "& .MuiInputBase-input": {
      padding: "9px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // "& .MuiFormLabel-root" : {
//     //     fontSize : props => (props.isFieldLogin ? "0.875rem" : "1rem"),
//     // },
//     margin: (props) => (props.isFieldLogin ? "0 0 2rem 0" : null),
//     width: "100%",

//     "& .MuiInputBase-root": {
//       fontSize: "13px",
//       height: "33px",
//     },

//     "& .MuiFormLabel-root": {
//       fontSize: "13px",
//       lineHeight: "0.8",
//     },

//     "& .MuiOutlinedInput-root": {
//       borderRadius: "3px",
//     },
//   },
// }));

function SelectField(props) {
  const classes = useStyles();

  const { name, placeholder, type, register, label, variant } = props;

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        //   value={age}
        //   onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  register: PropTypes.string,
};

SelectField.defaultProps = {
  type: "text",
  label: "example label",
  variant: "outlined",
};

export default SelectField;
