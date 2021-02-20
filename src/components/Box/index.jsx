import React from "react";
import PropTypes from "prop-types";
import SearchUsers from "../SearchUsers";

function Box(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchUsers />
      <div style={{ height: 200, backgroundColor: "yellow" }}></div>
    </div>
  );
}

Box.propTypes = {};

export default Box;
