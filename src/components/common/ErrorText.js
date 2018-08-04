import React from "react";
import PropTypes from "prop-types";

const style = {
  color: "#c00000"
};

const ErrorText = ({ children }) => <span style={style}>{children}</span>;

ErrorText.propTypes = {
  children: PropTypes.node
};

ErrorText.defaultProps = {
  children: null
};

export default ErrorText;
